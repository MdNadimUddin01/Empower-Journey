const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    rating:{

        type:Number,
        required:true,
        max:5,
        min:1
        
    },
    review:{
        type:String
    }


})

const RatingAndReview = mongoose.model("RatingAndReview" , ratingSchema)

module.exports = {RatingAndReview}