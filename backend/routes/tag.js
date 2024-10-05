const express = require("express");
const {
  createTag,
  deleteTag,
  editTag,
  getAllTags,
} = require("../controller/Tag");
const { isAdmin, verifyToken } = require("../middleware/Auth");
const route = express.Router();

route.post("/createTag", verifyToken, isAdmin, createTag);
route.delete("/deleteTag", verifyToken, isAdmin, deleteTag);
route.put("/editTag", verifyToken, isAdmin, editTag);
route.get("/getAllTags",getAllTags);

module.exports = route;
