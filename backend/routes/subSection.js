const express = require("express");
const { createSubsection, updateSubSection, deleteSubSection } = require("../controller/SubSection");
const { verifyToken, isInstructor } = require("../middleware/Auth");
const { upload } = require("../middleware/multer");
const route = express.Router();


route.post("/createSubsection", verifyToken, isInstructor, upload.fields([{name:"videoFile" , maxCount:1} , {name:"otherFile" , maxCount:1}]) ,createSubsection)
route.put("/updateSubSection" ,verifyToken, isInstructor, updateSubSection)
route.delete("/deleteSubSection" ,verifyToken, isInstructor, deleteSubSection)

module.exports = route