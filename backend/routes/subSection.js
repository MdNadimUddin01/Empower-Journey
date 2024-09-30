const express = require("express");
const { createSubsection, getAllSubSection } = require("../controller/SubSection");
const route = express.Router();

route.post('/createSubsection/:courseId/:sectionId' , createSubsection)
route.post('/getAllSubSection/:courseId/:sectionId' , getAllSubSection)

module.exports = route