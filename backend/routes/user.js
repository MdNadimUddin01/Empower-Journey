const express = require("express");
const { verifyToken } = require("../middleware/Auth");
const { assignCourse } = require("../controller/AssignCourse");
const { getUserDetails } = require("../controller/User");
const route = express.Router()

route.get("/getUserDetails" ,verifyToken, getUserDetails);
route.post("/assignCourse" ,verifyToken, assignCourse);

module.exports = route