const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    
    tagName:{
        type:String,
        required:true
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"

        }
    ],
    description :{
        type:String
    }

})

const Tag = mongoose.model("Tag" , tagSchema)

module.exports = {Tag}