const express = require("express");
const { verifyToken, isStudent } = require("../middleware/Auth");
const {
  editRatingAndReview,
  createRatingAndReview,
  deleteRatingAndReview,
  getAllRating,
} = require("../controller/RatingAndReview");
const route = express.Router();

route.post(
  "/createRatingAndReview",
  verifyToken,
  isStudent,
  createRatingAndReview
);
route.put("/editRatingAndReview", verifyToken, isStudent, editRatingAndReview);
route.get("/getAllRating", getAllRating);
route.delete(
  "/deleteRatingAndReview",
  verifyToken,
  isStudent,
  deleteRatingAndReview
);

module.exports = route;
