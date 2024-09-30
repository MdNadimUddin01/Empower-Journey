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

        if(question && answer){

            await FrequentlyAskedQuestion.findByIdAndUpdate({_id:FAQId } , {rating , review});

        }else if(question){
            await FrequentlyAskedQuestion.findByIdAndUpdate({_id:FAQId } , {question});
        }else{
            await FrequentlyAskedQuestion.findByIdAndUpdate({_id:FAQId  } , {answer });
        }

        return res.status(200).json({
            success:true,
            message:"FAQ updated"
        })

    }catch(error){
        return next(error)
    }
}

exports.deleteFAQ = async(req , res , next) => {

    try{
        
        const id = req.id
        const {FAQId , courseId} = req.body

        await FrequentlyAskedQuestion.findByIdAndDelete({_id:FAQId});

        const { frequentlyAskedQuestions } = await Course.findById(courseId);

        const index = frequentlyAskedQuestions.indexof(FAQId);

        if (index !== -1) {
        
            frequentlyAskedQuestions.splice(index, 1);

            await Course.findByIdAndUpdate({ _id: courseId }, { frequentlyAskedQuestions: frequentlyAskedQuestions });
        
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