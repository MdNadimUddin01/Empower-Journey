const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({

    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    question:{
        type:String,
        required:true,
    },
    answer:{
        type:String,
        required:true
    }


})

const FrequentlyAskedQuestion = mongoose.model("FrequentlyAskedQuestion" , faqSchema)

module.exports = {FrequentlyAskedQuestion}