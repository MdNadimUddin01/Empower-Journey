const express = require("express");
const {
  createCourse,
  getAllCourse,
  getCourseDetails,
} = require("../controller/Course");
const { isInstructor, verifyToken } = require("../middleware/Auth");
const route = express.Router();

route.post("/createCourse", verifyToken, isInstructor, createCourse);
route.get("/getAllCourses", verifyToken, getAllCourse);
route.get("getCourseDetails", getCourseDetails);

module.exports = route;