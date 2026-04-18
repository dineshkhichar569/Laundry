const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: String,
    userName: String,
    items: [
      {
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: Number,
    phone: String,
    address: String,
    pickupDate: String,
    status: { type: String, default: "pending" },
    trackingId: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Bookings", bookingSchema);
