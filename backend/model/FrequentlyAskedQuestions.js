const mongoose = require("mongoose");

const fqaSchema = new mongoose.Schema({

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

const FrequentlyAskedQuestion = mongoose.model("FrequentlyAskedQuestion" , fqaSchema)

module.exports = {FrequentlyAskedQuestion}