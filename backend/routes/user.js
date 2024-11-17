const express = require("express");
const { verifyToken, isStudent } = require("../middleware/Auth");
const { assignCourse } = require("../controller/AssignCourse");
const { getUserDetails, getEnrolledCourses } = require("../controller/User");
const { auth } = require("../middleware/authCourse");
const route = express.Router()

route.get("/getUserDetails" ,verifyToken, getUserDetails);
route.post("/assignCourse" ,verifyToken, isStudent, assignCourse);
route.get("/getEnrolledCourses", auth, getEnrolledCourses)

module.exports = route