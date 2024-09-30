const { Section } = require("../model/Section");
const { SubSection } = require("../model/SubSection");
const { errorHandle } = require("../utils/errorHandler");

exports.createSubsection = async (req, res, next) => {

  try {
    // const {  } = req.params;
    // const {  } = req.params;
    const { subSectionName  , courseId , sectionId} = req.body;

    if (!subSectionName) {
      return next(errorHandle("401", "All Field are required"));
    }

    if (!sectionId) {
      return next("401", "Something went wrong while creating the section");
    }

    const existingSection = await Section.findById(sectionId);

    if (!existingSection) {
      return next(
        errorHandle("404", "Course not found , first create your course")
      );
    }

    // update cloudinary
    //Update url

    const newSubSection = new SubSection({
      subSectionName: subSectionName,
    });

    await newSubSection.save();

    const sectionDetails = await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $push: {
          subSections: newSubSection._id,
        },
      },
      {
        new: true,
      }
    );

    if (!sectionDetails) {
      return next("", "Something went wrong");
    }

    return res.status(200).json({
      success: true,
      message: "Section created successfully",
      sectionDetails,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateSubSection = async (req, res, next) => {
  try {
    const { subSectionName , subSectionId } = req.body;
    // const {  } = req.params;

    if (!subSectionName || !subSectionId) {
      return next(errorHandle(400, "All Fields are required"));
    }

    //make sure file is also updated or not
    const updatedSection = await SubSection.findByIdAndUpdate(
      { _id: subSectionId },
      { subSectionName: subSectionName }
    );

    return res.status(200).json({
      success: true,
      message: "SubSection Updated",
      updatedSection,
    });
    
  } catch (error) {
    return next(error);
  }
};

exports.deleteSubSection = async (req, res) => {
  try {
    const { subSectionId, sectionId } = req.params;

    await SubSection.findByIdAndDelete({ _id: subSectionId });

    const { subSections } = await Section.findById(courseId);

    const index = subSections.indexof(subSectionId);

    if (index !== -1) {
      subSections.splice(index, 1);

      await Section.findByIdAndUpdate(
        { _id: sectionId },
        { subSections: subSections }
      );

    }

    return res.status(200).json({
      success: true,
      message: "SubSection deleted",
    });

  } catch (error) {
    return next(error);
  }
};
// exports.getAllSubSection = async(req , res , next) => {

//     try{

//         const {courseId} = req.params;
//         const {sectionId} = req.params;

//         if(!courseId || sectionId){
//             return next(errorHandle("400" , "something went wrong"))
//         }

//         const {subSections} = await Section.find({_id:sectionId , courseId}).populate();
//         // const allSubSection = await SubSection.find({courseId:courseId});

//         return res.status(200).json({
//             success:true,
//             message:"All subsection are retrived successfully",
//             subSections
//         })

//     }catch(error){
//         return next(errorHandle(error));
//     }

// }
