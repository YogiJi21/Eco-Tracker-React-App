const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// creating a user using POST:"/api/auth/createuser"
router.post(
  "/createuser",
  [
    body("username", "Invalid UserName").trim().isLength({ min: 5 }),
    body("email", "Invalid Email").trim().isEmail(),
    body("password", "Invalid password").trim().isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if error exist
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check wether the same email exist or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry This email already exists" });
      }
      // creating user
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(user);
    } catch (error) {
      console.error(error.messsage);
      // res.status(500).send("Some eroor ocuured");
    }
  }
);
module.exports = router;
