const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db.js");

dotenv.config();

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:8080",
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS not allowed"));
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// Routes
app.use("/api/auth", require("./src/routes/auth.js"));
app.use("/api/services", require("./src/routes/services"));
app.use("/api/bookings", require("./src/routes/bookings"));
app.use("/api/reviews", require("./src/routes/reviews"));
app.use("/api/blogs", require("./src/routes/blogs"));
app.use("/api/admin", require("./src/routes/admin"));

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Server start failed:", error.message);
    process.exit(1);
  }
};

startServer();
