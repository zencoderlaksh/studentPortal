const express = require("express");
const Progress = require("../models/Progress");
const Lesson = require("../models/Lesson");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Mark a lesson as completed
router.post("/:lessonId", authMiddleware, async (req, res) => {
  const { lessonId } = req.params;

  try {
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    const newProgress = new Progress({
      student: req.user.id,
      course: lesson.course,
      lesson: lessonId,
      completed: true,
      completedAt: new Date(),
    });

    await newProgress.save();
    res.status(201).json({ message: "Lesson marked as completed!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all progress for a course
router.get("/:courseId", authMiddleware, async (req, res) => {
  const { courseId } = req.params;

  try {
    const progress = await Progress.find({
      course: courseId,
      student: req.user.id,
    }).populate("lesson");
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
