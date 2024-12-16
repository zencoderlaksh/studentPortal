const express = require("express");
const Course = require("../models/Course");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Create a new course (instructor only)
router.post("/", authMiddleware, async (req, res) => {
  const { title, description } = req.body;

  try {
    const newCourse = new Course({
      title,
      description,
      instructor: req.user.id, // Set the instructor as the logged-in user
    });

    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Fetch all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name");
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
