const express = require("express");
const { createCourse, getAllCourse } = require("../controller/Course");
const { verify } = require("crypto");
const { isInstructor, isAdmin, verifyToken } = require("../middleware/Auth");
const { createTag, getAllTags } = require("../controller/Tag");
const router = express.Router();

router.post("/createCourse" , verifyToken, isInstructor ,createCourse)
router.get("/getAllCourses", verifyToken , getAllCourse);
router.post("/createTag" , verifyToken , isAdmin , createTag)
router.get("/allTags" , getAllTags)

module.exports = router