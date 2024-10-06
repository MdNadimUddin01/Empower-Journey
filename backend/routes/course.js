const express = require("express");
const {
  createCourse,
  getAllCourse,
  getCourseDetails,
} = require("../controller/Course");
const { isInstructor, verifyToken } = require("../middleware/Auth");
const { upload } = require("../middleware/multer");
const route = express.Router();

route.post("/createCourse", verifyToken, isInstructor,upload.fields([{name:"thumbnail" , maxCount:1}]), createCourse);
route.get("/getAllCourses", verifyToken, getAllCourse);
route.get("/getCourseDetails", getCourseDetails);

module.exports = route;