const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000

app.listen(PORT , () => {
    console.log("App is running on 4000");
})

//middleware

app.use(express.json());
app.use(cors());
app.use(cookieParser())


//database conection

const {dataBaseConnection} = require("./config/database");
dataBaseConnection();


//auth route
const authRoute = require("./routes/auth");
app.use("/api/v1" , authRoute);

// course route
const courseRoute = require("./routes/course")
app.use("/api/v1" , courseRoute)

// Faq Route
const faqRoute = require("./routes/faq")
app.use("/api/v1" , faqRoute)

// rating and review
const ratingAndReviewRoute = require("./routes/ratingAndReview")
app.use("/api/v1" , ratingAndReviewRoute)

// section Route
const sectionRoute = require("./routes/section");
app.use("/api/v1" , sectionRoute)

// subSection Route
const subSectionRoute = require("./routes/subSection");
app.use("/api/v1" , subSectionRoute)

// tag Route
const tagRoute = require("./routes/tag")
app.use("/api/v1" , tagRoute)

// user Route
const userRoute = require("./routes/user")
app.use("/api/v1" , userRoute)



// error handling
app.use((err , req , res , next) => {

    const statusCode = err.statusCode || 500;

    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
    
})

