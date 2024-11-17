const { populate } = require("dotenv");
const { User } = require("../model/User");
const { CourseProgress } = require("../model/CourseProgress");
const { convertSecondsToDuration } = require("../utils/secToDuration");

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
            populate: [
                {
                    path : "frequentlyAskedQuestions"
                },
                {
                    path:"ratingAndReviews",
                },
                {
                    path : "sections",
                    populate : {
                        path:"subSections"
                    }
                }
            ]
        });

        return res.status(200).json({
            success:true,
            message:"All details od User are achieved",
            userDetails
        })
        
    }catch(error){
        return next(error);
    }
    
}

// exports.getEnrolledCourses = async (req, res) => {
//     try {
//       const userId = req.user.id
//       console.log("USER" ,userId);

//       let userDetails = await User.findOne({
//         _id: userId,
//       })
//         .populate({
//           path: "courses",
//           populate: {
//             path: "courseContent",
//             populate: {
//               path: "subSection",
//             },
//           },
//         })
//         .exec()
//       userDetails = userDetails.toObject()

//     //   console.log("USERDETAILS " ,userDetails)

//       var SubsectionLength = 0
//       for (var i = 0; i < userDetails.courses.length; i++) {
//         let totalDurationInSeconds = 0
//         SubsectionLength = 0
//         for (var j = 0; j < userDetails.courses[i].courseContent.length; j++) {
//           totalDurationInSeconds += userDetails.courses[i].courseContent[
//             j
//           ].subSection.reduce((acc, curr) => acc + parseInt(curr.timeDuration), 0)
//           userDetails.courses[i].totalDuration = convertSecondsToDuration(
//             totalDurationInSeconds
//           )
//           SubsectionLength +=
//             userDetails.courses[i].courseContent[j].subSection.length
//         }
//         let courseProgressCount = await courseProgress.findOne({
//           courseID: userDetails.courses[i]._id,
//           userId: userId,
//         })
//         courseProgressCount = courseProgressCount?.completedVideos.length
//         if (SubsectionLength === 0) {
//           userDetails.courses[i].progressPercentage = 100
//         } else {
//           // To make it up to 2 decimal point
//           const multiplier = Math.pow(10, 2)
//           userDetails.courses[i].progressPercentage =
//             Math.round(
//               (courseProgressCount / SubsectionLength) * 100 * multiplier
//             ) / multiplier
//         }
//       }

      
//       if (!userDetails) {
//         return res.status(400).json({
//           success: false,
//           message: `Could not find user with id: ${userDetails}`,
//         })
//       }

      
      
//       return res.status(200).json({
//         success: true,
//         data: userDetails.courses,
//       })
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: error.message,
//       })
//     }
// }

exports.getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    let userDetails = await User.findOne({ _id: userId })
      .populate({
        path: "courses",
        populate: {
          path: "courseContent",
          populate: {
            path: "subSection",
          },
        },
      })
      .exec();

    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: `User not found with id: ${userId}`,
      });
    }

    userDetails = userDetails.toObject();

    // Calculate progress for each course
    for (const course of userDetails.courses) {
      let totalDurationInSeconds = 0;
      let SubsectionLength = 0;

      // Calculate total duration and subsection length
      for (const content of course.courseContent) {
        if (!content.subSection) continue;
        
        totalDurationInSeconds += content.subSection.reduce(
          (acc, curr) => acc + (parseInt(curr.timeDuration) || 0),
          0
        );
        SubsectionLength += content.subSection.length;
      }

      // Get course progress
      const courseProgress = await CourseProgress.findOne({
        courseID: course._id,
        userId: userId,
      });

      const completedVideosCount = courseProgress?.completedVideos?.length || 0;

      // Calculate progress percentage
      course.totalDuration = convertSecondsToDuration(totalDurationInSeconds);
      course.progressPercentage = SubsectionLength === 0 
        ? 100 
        : Math.round((completedVideosCount / SubsectionLength) * 100 * 100) / 100;
    }

    return res.status(200).json({
      success: true,
      data: userDetails.courses,
    });

  } catch (error) {
    console.error("Error in getEnrolledCourses:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch enrolled courses",
      error: error.message,
    });
  }
};