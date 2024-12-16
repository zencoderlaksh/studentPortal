const express = require("express");
const Enrolment = require("../models/Enrollment");
const Course = require("../models/Course");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Enrol in a course (student only)
router.post("/:courseId", authMiddleware, async (req, res) => {
  const { courseId } = req.params;

  try {
    // Check if the course exists
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Enrol the student
    const newEnrolment = new Enrolment({
      student: req.user.id,
      course: courseId,
    });

    await newEnrolment.save();
    res.status(201).json({ message: "Enrolled in course successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all courses a student is enrolled in
router.get("/", authMiddleware, async (req, res) => {
  try {
    const enrolments = await Enrolment.find({ student: req.user.id }).populate(
      "course"
    );
    res.status(200).json(enrolments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
