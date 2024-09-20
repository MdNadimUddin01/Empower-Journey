const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    courseName:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    tags:{
        type:[mongoose.Schema.ObjectId],
        required:"Tag",
    },
    thumbnail:{
        type:String,
        required:true,
    },
    courseOutcome:{
        type:String,
        required:true,
    },
    studentEnrolled:{
        type:Number,
    },
    language:{
        type:String,
        required:true,
    },
    coursePrice:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true,
    },
    sections:{
        type:[mongoose.Schema.ObjectId],
        Ref:"Section"
    },
    frequentlyAskedQuestions:{
        type:[mongoose.Schema.ObjectId],
        Ref:"FrequentlyAskedQuestion"
    },
    ratingAndReviews:{
        type:[mongoose.Schema.ObjectId],
        Ref:"RatingAndReview"
    },

})

const Course = mongoose.model("Course" , courseSchema);

module.exports = {Course};