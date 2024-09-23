const { Course } = require("../model/Course");
const { Section } = require("../model/Section");
const { errorHandle } = require("../utils/errorHandler");

exports.createSection = async(req , res , next) => {

    try{

        const {courseId} = req.params;
        const {sectionName} = req.body;

        if(!sectionName){
            return next(errorHandle("401" , "All Field are required"));
        }

        if(!courseId){
            return next("401" , "Something went wrong while creating the section");
        }

        const existingCourse = await Course.findById(courseId);

        if(!existingCourse){
            return next(errorHandle("404" , "Course not found , first create your course"));
        }

        const newSection = new Section({
            courseId:courseId,
            sectionName:sectionName
        });

        await newSection.save();

        const courseDetails = await Course.findByIdAndUpdate(
            {_id:courseId} , 
            {
                $push:{
                    sections : newSection._id
                }
            },
            {
                new:true
            }
        )
        
        if(!courseDetails){
            return next("" , "Something went wrong");
        }

        return res.status(200).json({
            success:true,
            message:"Section created successfully",
            courseDetails,
        })
        
    }catch(error){
        return next(error);
    }

}


exports.getAllSubsection = async(req, res , next) => {

    try{

        const {courseId} = req.params;

        if(!courseId){
            return next(errorHandle())
        }

        const allSubSection = await Section.find({courseId:courseId});

        return res.status(200).json({
            success:true,
            message:"All subsection are retrived successfully",
            allSubSection
        })

    }catch(error){

        return next(error);

    }

}