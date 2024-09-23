const mongoose = require("mongoose");

const subSectionSchema = new mongoose.Schema({

    subSectionName:{
        type:String,
        required:true
    },
    videoUrl :{
        type:String
    },
    otherUrl:{
        type:String
    },
    article:{
        type:String
    }

})

const SubSection = mongoose.model("SubSection" , subSectionSchema)

module.exports = {SubSection}