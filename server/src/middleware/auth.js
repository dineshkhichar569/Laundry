const jwt = require("jsonwebtoken");
const User = require("../models/Users.js");

// to Check if user is logged in or not
async function protect(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}

// to Check if user is admin or not
function admin(req, res, next) {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin only" });
  }
}

module.exports = { protect, admin };