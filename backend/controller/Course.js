const { Course } = require("../model/Course");
const { Section } = require("../model/Section");
const { Tag } = require("../model/Tag");
const { User } = require("../model/User");
const { uploadOnCloudianry } = require("../utils/cloudinary");
const { errorHandle } = require("../utils/errorHandler");

exports.createCourse = async (req, res, next) => {
  try {
    const {
      courseName,
      description,
      tagName,
      courseOutcome,
      language,
      coursePrice,
    } = req.body;

    const thumbnailFile = req.files?.thumbnail?.[0].path;


    const thumbnail = await uploadOnCloudianry(thumbnailFile);

    const id = req.id;

    console.table([courseName , description , tagName , courseOutcome , language , coursePrice])

    if (
      !courseName ||
      !description ||
      !tagName ||
      !courseOutcome ||
      !language ||
      !coursePrice
    ) {
      return next(errorHandle("400", "All Field are required"));
    }
    
    const existingUser = await User.findById({ _id: id });
    const tagInfo = await Tag.findOne({ tagName: tagName });

    if (!tagInfo) {
      return next("404", "Tag not Found");
    }

    if (!existingUser) {
      return next(errorHandle("401", "Something Went Wrong"));
    }

    const newCourse = new Course({
      courseName,
      coursePrice,
      description,
      tag: tagInfo._id,
      courseOutcome,
      language,
      instructor: existingUser._id,
      thumbnail:thumbnail.url
    });

    
    await newCourse.save();
    console.log(newCourse)

    const updatedTag = await Tag.findByIdAndUpdate(
      { _id: tagInfo._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      {
        new: true,
      }
    );

    const updatedUser = await User.findByIdAndUpdate(
      { _id: existingUser._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Course created successfull",
      newCourse,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getAllCourse = async (req, res, next) => {

  try {
    const allCourses = await Course.find(
      {},
      {
        courseName: true,
        description: true,
        tagName: true,
        courseOutcome: true,
        language: true,
        coursePrice: true,
        thumbnail:true
      }
    )
      .populate("tag")
      .populate("instructor")
      .populate({
        path: "sections",
        populate: {
          path: "subSections",
        },
      })
      .populate("frequentlyAskedQuestions")
      .populate("ratingAndReviews")
      .exec();

    return res.status(200).json({
      success: true,
      message: "All course are fetched",
      allCourses,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getCourseDetails = async (req, res, next) => {

  try {

    const { courseId } = req.body;

    const courseDetails = await Course.findById(courseId)
      .populate({
        path: "sections",
        populate: {
          path: "subSections",
        },
      })
      .populate("frequentlyAskedQuestions")
      .populate("ratingAndReviews")
      .exec();

    if(!courseDetails) {
      return next(errorHandle(403, "somewthing went wrong"));
    }

    return res.status(200).json({
      success: false,
      message: "Course details found",
      courseDetails,
    });

  } catch (error) {
    return next(error);
  }
  
};

