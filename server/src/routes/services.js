const express = require("express");
const Service = require("../models/Services.js");
const { protect, admin } = require("../middleware/auth.js");

const router = express.Router();

// Get all services (public)
router.get("/", async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// Add service only for (admin)
router.post("/", protect, admin, async (req, res) => {
  const service = await Service.create(req.body);
  res.json(service);
});

// Update service only for (admin)
router.put("/:id", protect, admin, async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(service);
});

// Delete service only for (admin)
router.delete("/:id", protect, admin, async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
