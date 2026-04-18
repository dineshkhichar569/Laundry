const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: String,
  price: Number,
  icon: { type: String, default: "🧺" },
  description: String,
});

module.exports = mongoose.model("Services", serviceSchema);
