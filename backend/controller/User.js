const { populate } = require("dotenv");
const { User } = require("../model/User");

exports.getUserDetails = async(req , res , next) => {

    try{

        const id = req.id;

        const userDetails = await User.findById({_id:id} , {
            email:true,
            firstName:true,
            lastName:true,
            phoneNumber:true,
            courses:true,
            courseProgress:true
        }).populate({
            path:"courses",
            populate:{
                path:"sections",
                populate:{
                    path:"subSections",
                }
            }
        }).populate("courseProgress").exec();

        return res.status(200).json({
            success:true,
            message:"All details od User are achieved",
            userDetails
        })
        
    }catch(error){
        return next(error);
    }
    
}