const mongoose = require("mongoose");

const enrolmentSchema = new mongoose.Schema({
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
  enrolledAt: { type: Date, default: Date.now },
});

const Enrolment = mongoose.model("Enrolment", enrolmentSchema);

module.exports = Enrolment;
