const express = require("express");
const User = require("../models/Users.js");
const Booking = require("../models/Bookings.js");
const Service = require("../models/Services.js");
const { protect, admin } = require("../middleware/auth.js");

const router = express.Router();

router.use(protect, admin);

// Stats
router.get("/stats", async (req, res) => {
  const users = await User.countDocuments();
  const bookings = await Booking.countDocuments();
  const services = await Service.countDocuments();
  const revenue = await Booking.aggregate([
    { $group: { _id: null, total: { $sum: "$total" } } },
  ]);

  res.json({
    users,
    bookings,
    services,
    revenue: revenue[0]?.total || 0,
  });
});

// All users
router.get("/users", async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// All bookings
router.get("/bookings", async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

// Update booking status
router.put("/bookings/:id", async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true },
  );
  res.json(booking);
});

module.exports = router;
