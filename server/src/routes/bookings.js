const express = require("express");
const Booking = require("../models/Bookings.js");
const { protect } = require("../middleware/auth.js");

const router = express.Router();

// Create booking only for logged-in user
router.post("/", protect, async (req, res) => {
  try {
    const { items, phone, address, pickupDate } = req.body;
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const trackingId = "LW" + Date.now();

    const booking = await Booking.create({
      userId: req.user._id,
      userName: req.user.name,
      items,
      total,
      phone,
      address,
      pickupDate,
      trackingId,
    });

    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get my bookings
router.get("/mine", protect, async (req, res) => {
  const bookings = await Booking.find({ userId: req.user._id }).sort({
    createdAt: -1,
  });
  res.json(bookings);
});

// Track by tracking id (public)
router.get("/track/:trackingId", async (req, res) => {
  const booking = await Booking.findOne({ trackingId: req.params.trackingId });
  if (!booking) return res.status(404).json({ message: "Not found" });
  res.json(booking);
});

// Cancel
router.delete("/:id", protect, async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: "Not found" });
  booking.status = "cancelled";
  await booking.save();
  res.json(booking);
});

module.exports = router;
