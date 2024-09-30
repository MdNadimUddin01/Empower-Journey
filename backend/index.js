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
app.use("/api/v1/" , authRoute);

// course route
const courseRoute = require("./routes/course")
app.use("/api/v1/" , courseRoute)

// section Route
const sectionRoute = require("./routes/section");
app.use("/api/v1" , sectionRoute)

// subSection Route
const subSectionRoute = require("./routes/subSection");
app.use("/api/v1" , subSectionRoute)

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

