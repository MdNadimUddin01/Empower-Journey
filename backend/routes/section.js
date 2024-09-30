const express = require("express")
const { createSection, getAllSection } = require("../controller/Section")
const route = express.Router()

route.post("/createSection/:sectionId" , createSection)
router.post("/getAllSection/:courseId" , getAllSection)


module.exports = route