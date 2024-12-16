// Import required packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Import custom routes
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const enrolmentRoutes = require("./routes/enrolmentRoutes");
const progressRoutes = require("./routes/progressRoutes");

// Import database connection function
const connectDB = require("./config/db");

// Initialize dotenv for environment variables
dotenv.config();

// Create an Express app instance
const app = express();

// Middleware setup
app.use(cors()); // Enable cross-origin requests
app.use(bodyParser.json()); // Parse incoming requests as JSON
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // Logging for development mode
}
app.use(express.json()); // Parse JSON requests

// MongoDB connection
connectDB();

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to the backend of the e-learning platform!");
});

// Routes
app.use("/api/users", userRoutes); // User-related routes
app.use("/api/courses", courseRoutes);
app.use("/api/lessons", lessonRoutes); // Lesson-related routes
app.use("/api/enrolments", enrolmentRoutes);
app.use("/api/progress", progressRoutes); // Progress-related routes

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
