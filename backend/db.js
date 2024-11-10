const mongoose = require('mongoose');

const cnURI = "mongodb://localhost:27017/zone?directConnection=true"; // connection string

// Connection Function
const cnMong = async () => {
  try {
    await mongoose.connect(cnURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with a failure
  }
};

module.exports = cnMong;
