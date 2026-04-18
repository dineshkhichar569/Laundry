const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userName: String,
    rating: Number,
    comment: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reviews", reviewSchema);