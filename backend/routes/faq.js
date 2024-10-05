const express = require("express");
const { verifyToken, isInstructor } = require("../middleware/Auth");
const {
  createFAQ,
  editFAQ,
  deleteFAQ,
  getAllFAQ,
} = require("../controller/FAQ");
const route = express.Router();

route.post("/createFAQ", verifyToken, isInstructor, createFAQ);
route.put("/editFAQ", verifyToken, isInstructor, editFAQ);
route.delete("/deleteFAQ", verifyToken, isInstructor, deleteFAQ);
route.get("/getAllFAQ", verifyToken, isInstructor, getAllFAQ);

module.exports = route;