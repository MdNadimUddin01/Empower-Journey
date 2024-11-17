import React from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../slices/cartSlice";
import { ACCOUNT_TYPE } from "../../../utils/constants";

// const CourseIncludes = [
//   "8 hours on-demand video",
//   "Full Lifetime access",
//   "Access on Mobile and TV",
//   "Certificate of completion",
// ]

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    _id: courseId,
  } = course;

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.");
      return;
    }
    if (token) {
      dispatch(addToCart(course));
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  // console.log("Student already enrolled ", course?.studentsEnrolled, user?._id)

  return (
    <>
      <div className={`lg:col-span-1 bg-gray-800 h-fit rounded-lg`}>
        {/* Course Image */}
        <img
          src={ThumbnailImage}
          alt={course?.courseName}
          className="object-cover rounded-lg"
        />

        <div className="rounded-lg p-6 space-y-4 sticky top-8">
          <div className="text-3xl font-bold">
            Rs. {CurrentPrice}
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg"
              onClick={
                user && course?.studentsEnrolled?.includes(user?._id)
                  ? () => navigate("/dashboard/enrolled-courses")
                  : handleBuyCourse
              }
            >
              {user && course?.studentsEnrolled?.includes(user?._id)
                ? "Go To Course"
                : "Buy Now"}
            </button>
            {(!user || !course?.studentsEnrolled?.includes(user?._id)) && (
              <button onClick={handleAddToCart} className="w-full bg-gray-700 text-white font-semibold py-3 rounded-lg">
                Add to Cart
              </button>
            )}
          </div>
          
          <div className="text-center text-sm">
            {/* <p className="pb-3 pt-6 text-center text-sm text-gray-50"> */}
              30-Day Money-Back Guarantee
            {/* </p> */}
          </div>

          <div className={`space-y-4`}>
            <h3 className={`font-semibold `}>
              This Course Includes :
            </h3>
            <div className="space-y-2 text-sm">
              {course?.instructions?.map((item, i) => {
                return (
                  <p className={`flex items-center gap-2`} key={i}>
                    <BsFillCaretRightFill />
                    <span>{item}</span>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
              onClick={handleShare}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetailsCard;
