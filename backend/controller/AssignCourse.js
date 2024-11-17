const { populate } = require("dotenv");
const { User } = require("../model/User");
const Course = require("../model/Course");

exports.assignCourse = async(req , res , next) => {

    try{
        console.log("HELLO : ");
        const {courseId} = req.body;
        const id = req.id;
        console.log("courseId : " , courseId);

        const courseDetails = await Course.findByIdAndUpdate({_id:courseId} , {
            $push:{
                studentEnrolled:id
            }
        })

        const updateUser = await User.findByIdAndUpdate({_id:id} ,{
            $push:{
                courses:courseDetails._id
            }
            
        },{new:true});

        console.log(courseDetails)
        console.log("Updated User : " , updateUser)
        return res.status(200).json({
            success:true,
            message:"Course added",
            updateUser,
        })
        
    }catch(error){
        return next(error)
    }
} 