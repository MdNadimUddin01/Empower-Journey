const mongoose = require("mongoose");

const courseProgressSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  courseId: {
    type: String,
    required: true,
  },

  completedSubsection: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"SubSection",
    required: true,
  }],
  
});

const CourseProgress = mongoose.model("CourseProgress" , courseProgressSchema);

module.exports = {CourseProgress};