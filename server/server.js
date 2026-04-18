const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db.js");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


// Health check
app.get("/api/health", (req, res) =>
  res.json({ status: "ok", time: new Date() }),
);

// Routes
app.use("/api/auth", require("./src/routes/auth.js"));
app.use("/api/services", require("./src/routes/services"));
app.use("/api/bookings", require("./src/routes/bookings"));
app.use("/api/reviews", require("./src/routes/reviews"));
app.use("/api/blogs", require("./src/routes/blogs"));
app.use("/api/admin", require("./src/routes/admin"));



const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
