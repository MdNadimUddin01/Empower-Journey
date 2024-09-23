// const { Section } = require("../model/Section");
// const { errorHandle } = require("../utils/errorHandler");

// exports.createSubsection = async(req, res , next) => {

//     try{

//         // const {sectionId} = req.params;

//         // if(!sectionId){
//         //     return next(errorHandle("401" , "Something went wrong while creating the subsection"))
//         // }

//         const {sectionId} = req.params;
//         const {sectionName} = req.body;

//         if(!sectionName){
//             return next(errorHandle("401" , "All Field are required"));
//         }

//         if(!sectionId){
//             return next("401" , "Something went wrong while creating the section");
//         }

//         const existingSection = await Section.findById(sectionId);

//         if(!existingSection){
//             return next(errorHandle("404" , "Course not found , first create your course"));
//         }

//         const newSection = new Section({
//             courseId:courseId,
//             sectionName:sectionName
//         });

//         await newSection.save();

//         const sectionDetails = await Section.findByIdAndUpdate(
//             {_id:sectionId} , 
//             {
//                 $push:{
//                     subSections : newSection._id
//                 }
//             },
//             {
//                 new:true
//             }
//         )
        
//         if(!sectionDetails){
//             return next("" , "Something went wrong");
//         }

//         return res.status(200).json({
//             success:true,
//             message:"Section created successfully",
//             sectionDetails,
//         })

//     }catch(error){
//         return next(error);
//     }
// }