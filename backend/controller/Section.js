const { Course } = require("../model/Course");
const { Section } = require("../model/Section");
const { errorHandle } = require("../utils/errorHandler");

exports.createSection = async (req, res, next) => {
  try {
    // const {  } = req.params;
    const { sectionName ,courseId } = req.body;

    if (!sectionName) {
      return next(errorHandle("401", "All Field are required"));
    }

    if (!courseId) {
      return next("401", "Something went wrong while creating the section");
    }

    const existingCourse = await Course.findById(courseId);

    if (!existingCourse) {
      return next(
        errorHandle("404", "Course not found , first create your course")
      );
    }

    const newSection = new Section({
      sectionName: sectionName,
    });

    await newSection.save();

    const courseDetails = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          sections: newSection._id,
        },
      },
      {
        new: true,
      }
    );



    return res.status(200).json({
      success: true,
      message: "Section created successfully",
      courseDetails,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateSection = async (req, res, next) => {
  try {
    const { sectionName , sectionId } = req.body;
    // const {  } = req.params;

    if (!sectionId || !sectionName) {
      return next(errorHandle(400, "All Fields are required"));
    }

    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      { sectionName: sectionName }
    );

    return res.status(200).json({
      success: true,
      message: "Section Updated",
      updatedSection,
    });
  } catch (error) {
    return next(error);
  }
};

exports.deleteSection = async (req, res , next) => {
  try {
    const { sectionId, courseId } = req.body;

    if(!sectionId || !courseId){
      return next(errorHandle(401 , "All Fields are required"))
    }

    await Section.findByIdAndDelete({ _id: sectionId });

    const { sections } = await Course.findById(courseId);

    const index = sections.indexof(sectionId);

    if (index !== -1) {

      sections.splice(index, 1);

      await Course.findByIdAndUpdate({ _id: courseId }, { sections: sections });
      
    }

    return res.status(200).json({
      success: true,
      message: "Section deleted",
    });

  } catch (error) {
    return next(error);
  }
  
};

// exports.getAllSection = async(req, res , next) => {

//     try{

//         const {courseId} = req.params;

//         if(!courseId){
//             return next(errorHandle())
//         }

//         const allSubSection = await Section.find({courseId:courseId});

//         return res.status(200).json({
//             success:true,
//             message:"All subsection are retrived successfully",
//             allSubSection
//         })

//     }catch(error){

//         return next(error);

//     }

// }
