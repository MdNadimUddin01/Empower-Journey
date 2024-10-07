const { populate } = require("dotenv");
const { Course } = require("../model/Course");
const { User } = require("../model/User");

exports.assignCourse = async(req , res) => {

    try{

        const {courseId} = req.body;
        const id = req.id;

        const courseDetails = await Course.findByIdAndUpdate({_id:courseId} , {
            $push:{
                studentEnrolled:id
            }
        })

        const updateUser = await User.findByIdAndUpdate({_id:id} ,{
            $push:{
                courses:courseDetails._id
            }
            
        },{new:true}).populate(
            {
                path:"courses",
                populate:{
                    path:"sections",
                    populate:{
                        path:"subSections"
                    }
                }
            }
        )

        return res.status(200).json({
            success:true,
            message:"Course added",
            updateUser,
        })
        
    }catch(error){
        return next(error)
    }
} 