const { Course } = require("../model/Course")
const { FrequentlyAskedQuestion } = require("../model/FrequentlyAskedQuestions")
const { RatingAndReview } = require("../model/RatingAndReview")
const { errorHandle } = require("../utils/errorHandler")

exports.createFAQ = async(req , res , next) => {

    try{

        const {question , answer ,courseId} = req.body
        const id = req.id

        if(!courseId || !question ||!answer){
            return next(errorHandle(400 , "All Fields are required"));
        }

        // const alreadyReviewed = await RatingAndReview.findOne({})

        const newFQA = new FrequentlyAskedQuestion({question , answer  ,courseId});
        await newFQA.save()

        const courseDetails = await Course.findByIdAndUpdate({_id:courseId} , {
            $push:{
                frequentlyAskedQuestions : newFQA._id
            }
        },{new:true})

        return res.status(200).json({
            success:true,
            message:"rating and review added",
            newFQA
        })


    }catch(error){
        return next(error)
    }
    
}

exports.editFAQ = async(req , res , next) => {

    try{

        const {question , answer , FAQId} = req.body
        const id = req.id

        if(!question && !answer){
            return next(errorHandle(400 , "All Fields are required"));
        }

        const update = {}

        if(question){
            update.question = question
        }

        if(answer){
            update.answer = answer
        }

        const updatedFAQ = await FrequentlyAskedQuestion.findByIdAndUpdate(FAQId , update , {new:true})

        return res.status(200).json({
            success:true,
            message:"FAQ updated",
            updatedFAQ
        })

    }catch(error){
        return next(error)
    }
}

exports.deleteFAQ = async(req , res , next) => {

    try{
        
        const id = req.id
        const {FAQId , courseId} = req.body

        const data = await FrequentlyAskedQuestion.findByIdAndDelete(FAQId , {new:true});

        if(!data){
            return res.status(400).json({
                success:false,
                message:"FAQ not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"FAQ deleted successfully"
        })

    }catch(error){
        return next(error)
    }
}

exports.getAllFAQ = async(req , res , next) => {

    try{

        const {courseId} = req.body

        const {frequentlyAskedQuestions} = await Course.findById(courseId).populate("frequentlyAskedQuestions").exec()

        return res.status(200).json({
            success:true,
            message:"All rating and review fetched",
            frequentlyAskedQuestions
        })
        
    }catch(error){
        return next(error)
    }
}