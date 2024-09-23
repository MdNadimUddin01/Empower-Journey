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
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Tag"
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    thumbnail:{
        type:String,
        // required:true,
    },
    courseOutcome:[{
        type:String,
        required:true,
    }],
    studentEnrolled:{
        type:Number,
        default:0
    },
    language:{
        type:String,
        required:true,
    },
    coursePrice:{
        type:Number,
        required:true,
        min:0
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true,
    },
    sections:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section"
    }],
    frequentlyAskedQuestions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"FrequentlyAskedQuestion"
    }],
    ratingAndReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview"
    }],

})

const Course = mongoose.model("Course" , courseSchema);

module.exports = {Course};