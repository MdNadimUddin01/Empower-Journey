const mongoose = require("mongoose");

const courseProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },

  completedVideos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"SubSection",

  }],
  
});

const CourseProgress = mongoose.model("CourseProgress" , courseProgressSchema);

module.exports = {CourseProgress};