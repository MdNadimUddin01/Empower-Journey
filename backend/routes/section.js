const express = require("express");
const { createSection, updateSection, deleteSection } = require("../controller/Section");
const { verifyToken, isInstructor } = require("../middleware/Auth");
const route = express.Router();

route.post("/createSection", verifyToken, isInstructor, createSection);
route.put("/updateSection", verifyToken, isInstructor, updateSection);
route.delete("/deleteSection", verifyToken, isInstructor, deleteSection);

module.exports = route;