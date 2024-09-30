const { Course } = require("../model/Course")
const { RatingAndReview } = require("../model/RatingAndReview")
const { errorHandle } = require("../utils/errorHandler")

exports.createRatingAndReview = async(req , res , next) => {

    try{

        // const {courseId} = req.params
        const {rating , review ,courseId} = req.body
        const id = req.id

        if(!courseId || !rating ||!review){
            return next(errorHandle(400 , "All Fields are required"));
        }

        // const courseDetails = 

        const alreadyReviewed = await RatingAndReview.findOne({userId:id , courseId})

        if(alreadyReviewed){
            return next(errorHandle(409 , "You can only once rating and review the course"));
        }



        const newRatingReview = new RatingAndReview({rating , review ,userId:id ,courseId});
        await newRatingReview.save()

        const courseDetails = await Course.findByIdAndUpdate({_id:courseId} , {
            $push:{
                ratingAndReviews : newRatingReview._id
            }
        },{new:true})

        return res.status(200).json({
            success:true,
            message:"rating and review added",
            ratingAndReview : newRatingReview
        })

        

    }catch(error){
        return next(error);
    }
}

exports.editRatingAndReview = async(req , res , next) => {

    try{

        const {rating , review ,ratingAndReviewId} = req.body
        // const id = req.id

        if(!rating && !review){
            return next(errorHandle(400 , "All Fields are required"));
        }

        if(rating && review){

            await RatingAndReview.findByIdAndUpdate({_id:ratingAndReviewId} , {rating , review});

        }else if(rating){
            await RatingAndReview.findByIdAndUpdate({_id:ratingAndReviewId} , {rating});
        }else{
            await RatingAndReview.findByIdAndUpdate({_id:ratingAndReviewId} , {rating });
        }

        return res.status(200).json({
            success:true,
            message:"Rating and review updated"
        })


        
    }catch(error){
        return next(error)
    }
}

exports.deleteRatingAndReview = async(req , res , next) => {

    try{

        const id = req.id
        const {ratingAndReviewId} = req.body

        if(!ratingAndReviewId){
            return next(errorHandle(403 , "All Fields are required"))
        }

        await RatingAndReview.findByIdAndDelete(ratingAndReviewId);

        return res.status(200).json({
            success:true,
            message:"rating and review deleted successfully"
        })

    }catch(error){
        return next(error)
    }

}

exports.getAllRating = async(req , res , next) => {

    try{

        const {courseId} = req.body

        const {ratingAndReviews} = await Course.findById(courseId).populate("ratingAndReviews").exec()

        return res.status(200).json({
            success:true,
            message:"All rating and review fetched",
            ratingAndReviews
        })

    }catch(error){
        return next(error)
    }

}

exports.getAverageRating = async(req , res , next) => {

    try{

        const {courseId} = req.body

        const {ratingAndReview} = await Course.findById(courseId).populate(
            {path:"ratingAndReviews",
            select:rating}
        )

        return res.status(200).json({
            success:true,
            message:"rating fetched successfully",
            ratingAndReview
        })

    }catch(error){
        return next(error)
    }
}

