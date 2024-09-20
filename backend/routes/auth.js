const express = require("express");
const { signUp, sendOtp, login } = require("../controller/Auth");
const { verifyToken, isStudent } = require("../middleware/Auth");
const { test } = require("../controller/testing");

const route = express.Router();

route.post("/signup" , signUp);
route.post("/sendOtp" , sendOtp);
route.post("/login" , login);
route.post("/testing" , verifyToken , isStudent , test);


module.exports = route;


