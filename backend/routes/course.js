const express = require("express");
const { createCourse } = require("../controller/Course");
const { verify } = require("crypto");
const { isInstructor, isAdmin, verifyToken } = require("../middleware/Auth");
const { createTag, getAllTags } = require("../controller/Tag");
const router = express.Router();

router.post("/createCourse" , verifyToken, isInstructor ,createCourse)
router.post("/createTag" , verifyToken , isAdmin , createTag)
router.get("/allTags" , getAllTags)

module.exports = router