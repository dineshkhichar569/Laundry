const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    excerpt: String,
    content: String,
    author: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Blogs", blogSchema);
