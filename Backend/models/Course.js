const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
