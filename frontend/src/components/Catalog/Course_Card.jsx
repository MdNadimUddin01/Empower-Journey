import React, { useEffect, useState } from 'react'
import RatingStars from '../RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';
import {
    Star,
    StarHalf,
    Clock,
    Users,
    Award,
    ChevronRight,
    ArrowUp,
  } from "lucide-react";

const Course_Card = ({course, Height ,  isPopular=true , rating= 4.6} ) => {

  console.log("COURSE CARD : " , course)

    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])


    
  return (

    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-gray-800 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course?.thumbnail}
          alt={course?.courseName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isPopular && (
          <div className="absolute left-0 top-4 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1 text-sm font-bold text-white shadow-lg">
            BESTSELLER
          </div>
        )}
        {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white">
              {level}
            </span>
          </div>
        </div> */}
      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="mb-2 line-clamp-2 min-h-[48px] font-semibold text-white group-hover:text-blue-600">
        {course?.courseName}
        </h3>

        {/* Instructor */}
        <p className="mb-2 text-sm text-white">{course?.instructor?.firstName} {course?.instructor?.lastName}</p>

        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          <span className="font-bold text-orange-400">{rating}</span>
          <div className="flex">
            {[...Array(Math.floor(rating))].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-orange-400 text-orange-400"
              />
            ))}
            {rating % 1 !== 0 && (
              <StarHalf size={16} className="fill-orange-400 text-orange-400" />
            )}
          </div>
          <span className="text-sm text-white">
            ({100})
          </span>
        </div>

        {/* Course Meta */}
        <div className="mb-3 flex flex-wrap gap-3 text-sm text-white">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {"3 Weeks"}
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            {100} students
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">₹{course?.price}</span>
            <span className="text-sm text-white line-through">
              ₹{course?.price + 999}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex scale-0 flex-col justify-end bg-black/80 p-5 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <h4 className="mb-2 text-lg font-bold">{course.courseName}</h4>
        <div className="mb-3 flex items-center gap-2">
          <Award className="h-5 w-5 text-yellow-400" />
          <span className="text-sm">Certificate of completion</span>
        </div>
        <Link
          to={`/courses/${course._id}`}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          View Course
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
    // <div>
    //     <Link to={`/courses/${course._id}`}>
    //         <div>
    //             <div>
    //                 <img 
    //                     src={course?.thumbnail}
    //                     alt='course ka thumbnail'
    //                     className={`${Height} w-full rounded-xl object-cover`}
    //                 />
    //             </div>
    //             <div>
    //                 <p>{course?.courseName}</p>
    //                 <p>{course?.instructor?.firstName} {course?.instructor?.lastName} </p>
    //                 <div className='flex gap-x-3'>
    //                     <span>{avgReviewCount || 0}</span>
    //                     <RatingStars Review_Count={avgReviewCount} />
    //                     <span>{course?.ratingAndReviews?.length} Ratings</span>
    //                 </div>
    //                 <p>{course?.price}</p>
    //             </div>
    //         </div>
    //     </Link>

      
    // </div>
  )
}

export default Course_Card
