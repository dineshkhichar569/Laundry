const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db.js");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://laundry-kf4pa124d-dineshkhichar569s-projects.vercel.app",
      "https://laundry-two-omega.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Laundry API is running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

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
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();