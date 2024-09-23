const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({

    sectionName:{
        type:String,
        required:true
    },
    
    subSections:[
        
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubSection"
        }

    ],
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const Section = mongoose.model("Section" , sectionSchema)

module.exports = {Section}