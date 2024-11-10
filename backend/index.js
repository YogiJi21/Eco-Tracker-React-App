const cnMong = require("./db");
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');


cnMong();
const app = express();
const port = 5000;
const User=require("./models/User");
const Story = require("./models/Story"); 

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello ji halo')
})

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, "your_jwt_secret", { expiresIn: '24h' });
    res.json({ token, username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update your register route to hash the password
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let user = new User({ username, email, password: hashedPassword });
    let result = await user.save();
    const token = jwt.sign({ id: result._id }, "your_jwt_secret", { expiresIn: '24h' });
    res.status(201).json({ token, username: result.username, email: result.email });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});



// Local stories



// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const verified = jwt.verify(token, 'your_jwt_secret');
    req.user = verified;
    console.log('Token verified successfully');
    next();
  } catch (error) {
    console.log('Token verification failed:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};


// Get all stories
app.get('/stories', verifyToken, async (req, res) => {
  try {
    console.log('Fetching stories...');
    const stories = await Story.find().populate('author', 'username');
    console.log('Fetched stories:', stories);
    res.json(stories);
  } catch (error) {
    console.error('Error fetching stories:', error);
    res.status(500).json({ message: 'Error fetching stories', error: error.toString() });
  }
});


// Get a single story
app.get('/story/:id', verifyToken, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate('author', 'username');
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.json(story);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching story' });
  }
});

// Share a new story
app.post('/sharestories', verifyToken, upload.single('image'), async (req, res) => {
  try {
    const { title, content } = req.body;
    
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No image file uploaded' });
    }
    
    const imageUrl = `/uploads/${req.file.filename}`;
    const author = req.user.id;

    const newStory = new Story({
      title,
      content,
      imageUrl,
      author,
    });

    const savedStory = await newStory.save();
    res.status(201).json(savedStory);
  } catch (error) {
    console.error('Error sharing story:', error);
    res.status(500).json({ 
      message: 'Error sharing story', 
      error: error.message 
    });
  }
});

// Update a story
app.put('/stories/:id', verifyToken, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    if (story.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this story' });
    }
    
    const { title, content } = req.body;
    story.title = title;
    story.content = content;
    await story.save();
    
    res.json(story);
  } catch (error) {
    res.status(500).json({ message: 'Error updating story' });
  }
});

// Delete a story
app.delete('/stories/:id', verifyToken, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    if (story.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this story' });
    }
    
    await story.remove();
    res.json({ message: 'Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting story' });
  }
});

// Rate a story
app.post('/story/:id/rate', verifyToken, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }

    const { rating } = req.body;
    story.ratings.push(rating);
    story.averageRating = story.ratings.reduce((a, b) => a + b) / story.ratings.length;
    await story.save();

    res.json({ message: 'Rating added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error rating story' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})