const express = require("express");
const Review = require("../models/Reviews.js");
const { protect } = require("../middleware/auth.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
});

router.post("/", protect, async (req, res) => {
  const { rating, comment } = req.body;
  const review = await Review.create({
    userName: req.user.name,
    rating,
    comment,
  });
  res.json(review);
});

module.exports = router;
