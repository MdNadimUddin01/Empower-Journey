const express = require("express");
const { signUp, sendOtp, login, changePassword } = require("../controller/Auth");
const { verifyToken, isStudent, isAdmin } = require("../middleware/Auth");
const { test } = require("../controller/testing");

const route = express.Router();

route.post("/signup" , signUp);
route.post("/sendOtp" , sendOtp);
route.post("/login" , login);
route.put("/changePassword" , verifyToken , changePassword);

module.exports = route;


