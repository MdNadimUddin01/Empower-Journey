const { Course } = require("../model/Course");
const { Section } = require("../model/Section");
const { Tag } = require("../model/Tag");
const { User } = require("../model/User");
const { errorHandle } = require("../utils/errorHandler");

exports.createCourse = async(req , res , next) => {

    try{

        const {courseName , description , tagName , courseOutcome , language , coursePrice} = req.body;

        // const thumbnailUrl = req.file.thumbnailImage;

        const id = req.id;
        
        // console.table([courseName , description , tag , courseOutcome , language , coursePrice])

        if(!courseName || ! description || !tagName || !courseOutcome || !language || !coursePrice ){
            return next(errorHandle("400" , "All Field are required"));
        }

        //upload thumbnail
        // const thumbnail = thumbnailUrl;
        // console.log(tagName);
        const existingUser = await User.findById({_id : id});
        const tagInfo = await Tag.findOne({tagName:tagName});

        
        
        if(!tagInfo){
            return next("404" , "Tag not Found");
        }

        if(!existingUser){
            return next(errorHandle("401" , "Something Went Wrong"));
        }

        const newCourse = new Course({
            courseName , coursePrice , description , tag:tagInfo._id , courseOutcome , language , 
            instructor:existingUser._id,
        })

        await newCourse.save();

        tagInfo.courses.push(newCourse._id);

        const updatedTag = await Tag.findByIdAndUpdate({_id:tagInfo._id} , 
            {
                $push:{
                    courses:newCourse._id,
                }
            },
            {
                new:true
            }
        )
        
        const updatedUser = await User.findByIdAndUpdate({_id:existingUser._id} , 
            {
                $push:{
                    courses:newCourse._id,
                },
            },
            {
                new:true
            }
        )


        return res.status(200).json({
            success:true,
            message:"Course created successfull",
            newCourse,
        })

    }catch(error){

        return next(error)

    }

}

// exports.addSection = async(req , res , next) => {

//     try{

//         const {courseId} = req.params;

//         const {} = req.body;

//         const newSection = new Section({
            
//         })
//     }catch(error){

//     }

// }