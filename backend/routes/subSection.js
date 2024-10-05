const express = require("express");
const { createSubsection, updateSubSection, deleteSubSection } = require("../controller/SubSection");
const { verifyToken, isInstructor } = require("../middleware/Auth");
const route = express.Router();


route.post("/createSubsection", verifyToken, isInstructor,createSubsection)
route.put("/updateSubSection" ,verifyToken, isInstructor, updateSubSection)
route.delete("/deleteSubSection" ,verifyToken, isInstructor, deleteSubSection)

module.exports = route