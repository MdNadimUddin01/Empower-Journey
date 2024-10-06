const { Tag } = require("../model/Tag");
const { errorHandle } = require("../utils/errorHandler");

exports.createTag = async(req , res , next) => {

    try{

        const {tag , description} = req.body;

        if(!tag || !description){
            return next(errorHandle("400" , "Please Fill the required details"));
        }

        const existingTag = await Tag.findOne({tagName : tag});

        if(existingTag){
            return next(errorHandle("409" , "Already exists tag"))
        }

        const newTag = new Tag({tagName:tag , description:description});

        await newTag.save();

        return res.status(200).json({
            success:true,
            message:`Tag creation successfull`,
            newTag
        })


    }catch(error){

        return next(error);

    }
    
}

exports.deleteTag = async(req , res , next) => {

    try{

        const {tagId} = req.body;

        await Tag.findByIdAndDelete(tagId);

        return res.status(200).json({
            success:true,
            message:"Tag Deleted successfully"
        })

    }catch(error){

        return next(error)
    }
}

exports.editTag = async(req , res , next) => {

    try{

        const {tagName , tagId , description} = req.body

        const updatedFiled = {}

        if(tagName){
            updatedFiled.tagName = tagName
        }

        if(description){
            updatedFiled.description = description
        }

        if((!tagName && !description)|| !tagId){
            return next(errorHandle("400" , "All Fields are required"))
        }

        const newTag = await Tag.findByIdAndUpdate({_id:tagId} , updatedFiled,{new:true})

        return res.status(200).json({
            success:true,
            message:"Tag Updated successfully",
            newTag
        })

    }catch(error){

        return next(error)
        
    }
}
exports.getAllTags = async(req , res , next) => {

    try{

        const allTags = await Tag.find({},{tagName:true , description:true});
        // console.log(allTags)

        if(!allTags){
            return next("400" , "No Tag Found")
        }

        return res.status(200).json({
            success:true,
            allTags,
        })

    }catch(error){
        return next(error);
    }
    
}

