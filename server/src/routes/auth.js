const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Users.js");
const { protect } = require("../middleware/auth.js");

const router = express.Router();

// Helper: make a token
function makeToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already used" });

    const hashed_password = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashed_password,
      phone,
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: makeToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: makeToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get current user
router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;
