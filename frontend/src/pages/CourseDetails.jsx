import React, { useEffect, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import Markdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import ConfirmationModal from "../components/ConfirmationModal";
// import Footer from "../components/Common/Footer"
import RatingStars from "../components/RatingStars";
import CourseAccordionBar from "../components/Course/CourseAccordionBar";
import CourseDetailsCard from "../components/Course/CourseDetailsCard";
import { formatDate } from "../services/formatDate";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import { BuyCourse } from "../services/operations/studentFeaturesAPI"
import GetAvgRating from "../../utils/avgRating";
import Error from "./Error";
import { Clock, Globe } from "lucide-react";

function CourseDetails() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.profile);
  const { paymentLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Getting courseId from url parameter
  const { courseId } = useParams();
  // console.log(`course id: ${courseId}`)

  // Declear a state to save the course details
  const [response, setResponse] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await fetchCourseDetails(courseId);
        console.log("course details res: ", res);
        setResponse(res);
      } catch (error) {
        console.log("Could not fetch Course Details");
      }
    })();
  }, [courseId]);

  // console.log("response: ", response)

  // Calculating Avg Review count
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  useEffect(() => {
    const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews);
    setAvgReviewCount(count);
  }, [response]);
  // console.log("avgReviewCount: ", avgReviewCount)

  // // Collapse all
  // const [collapse, setCollapse] = useState("")
  const [isActive, setIsActive] = useState(Array(0));
  const handleActive = (id) => {
    // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e != id)
    );
  };

  // Total number of lectures
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
  useEffect(() => {
    let lectures = 0;
    response?.data?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0;
    });
    setTotalNoOfLectures(lectures);
  }, [response]);

  if (loading || !response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }
  if (!response.success) {
    return <Error />;
  }

  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnroled,
    createdAt,
  } = response.data?.courseDetails;

    // console.log("INFORMATION : " , response.data?.courseDetails);

//   console.log("CREATE : ", whatYouWillLearn);

  const handleBuyCourse = async() => {
    if (token) {
        BuyCourse(token, courseId, user, navigate, dispatch)
        // const result = await axios.post("")
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (paymentLoading) {
    // console.log("payment loading")
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  {
    /* Courses Card */
  }

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div
          className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(99, 102, 241, 0.05) 50%, 
            rgba(255, 255, 255, 0) 100%)`,
          }}
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{courseName}</h1>

              <p className={`text-gray-400`}>{courseDescription}</p>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">
                    {avgReviewCount ? avgReviewCount : 4.6}
                  </span>
                  <RatingStars
                    Review_Count={avgReviewCount ? avgReviewCount : 4.6}
                    Star_Size={20}
                  />
                  <span className="ml-2 text-gray-400">{`(${
                    ratingAndReviews?.length ? ratingAndReviews?.length : 50
                  } reviews)`}</span>
                </div>
                <span className="text-gray-400">{`${
                  studentsEnroled?.length ? studentsEnroled?.length : 100
                } students enrolled`}</span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4"></Clock>
                  Created at {formatDate(Date.now())}
                </div>

                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  English
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-6 space-y-4 my-6">
                <h2 className="text-xl font-semibold">What you'll learn</h2>

                <div className="mt-5">
                  <Markdown>{whatYouWillLearn}</Markdown>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Course content</h2>

                  <button
                    className="text-yellow-500 text-sm"
                    onClick={() => setIsActive([])}
                  >
                    Collapse all sections
                  </button>
                </div>

                <div className="text-sm text-gray-400">
                  {`${courseContent.length} sections • ${totalNoOfLectures} lectures • ${response.data?.totalDuration} total length`}
                </div>

                <div className="space-y-2">
                  {courseContent?.map((course, index) => (
                    <CourseAccordionBar
                      course={course}
                      key={index}
                      isActive={isActive}
                      handleActive={handleActive}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-12 py-4">
                <p className="text-[28px] font-semibold">Author</p>
                <div className="flex items-center gap-4 py-4">
                  <img
                    src={
                      instructor.image
                        ? instructor.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                    }
                    alt="Author"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
                </div>
                <p className="text-richblack-50">
                  {instructor?.additionalDetails?.about}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 bg-gray-800 h-fit rounded-lg">
            <CourseDetailsCard
              course={response?.data?.courseDetails}
              setConfirmationModal={setConfirmationModal}
              handleBuyCourse={handleBuyCourse}
            />
          </div>

        </div>

      </div>

      
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}

export default CourseDetails;


