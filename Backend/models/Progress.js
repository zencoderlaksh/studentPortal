const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true,
  },
  completed: { type: Boolean, default: false },
  completedAt: { type: Date },
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;
