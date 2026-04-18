const express = require("express");
const Blog = require("../models/Blogs.js");
const { protect, admin } = require("../middleware/auth.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

router.get("/:slug", async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) return res.status(404).json({ message: "Not found" });
  res.json(blog);
});

router.post("/", protect, admin, async (req, res) => {
  const slug = req.body.title.toLowerCase().replace(/ /g, "-");
  const blog = await Blog.create({ ...req.body, slug });
  res.json(blog);
});

router.delete("/:id", protect, admin, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
