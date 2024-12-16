const express = require("express");
const Lesson = require("../models/Lesson");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Create a new lesson (instructor only)
router.post("/:courseId", authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const { courseId } = req.params;

  try {
    const newLesson = new Lesson({
      title,
      content,
      course: courseId,
      instructor: req.user.id, // Only instructor can add lessons
    });

    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get lessons for a specific course
router.get("/:courseId", async (req, res) => {
  const { courseId } = req.params;

  try {
    const lessons = await Lesson.find({ course: courseId });
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
