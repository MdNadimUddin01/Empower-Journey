import React, { useEffect, useState } from "react";
import {
  Star,
  StarHalf,
  Clock,
  Users,
  Award,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import CourseImage from "./images/python.jpg";
import { Link, useNavigate } from "react-router-dom";

// Course dummy data with images and additional details
const courses = [
  {
    id: 1,
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviewCount: 387,
    price: "1,200",
    originalPrice: "3,499",
    studentsEnrolled: "235,687",
    duration: "29.5 hours",
    lastUpdated: "December 2023",
    isPopular: true,
    image: CourseImage,
    level: "Beginner",
    // imageUrl:CourseImage
  },
  {
    id: 2,
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviewCount: 245,
    price: "1,200",
    originalPrice: "2,999",
    studentsEnrolled: "198,432",
    duration: "22 hours",
    lastUpdated: "January 2024",
    isPopular: false,
    image: CourseImage,
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Advanced Python Programming: Build 10 Real World Applications",
    instructor: "Tech With Tim",
    rating: 4.7,
    reviewCount: 156,
    price: "1,200",
    originalPrice: "3,299",
    studentsEnrolled: "145,908",
    duration: "25 hours",
    lastUpdated: "November 2023",
    isPopular: true,
    image: CourseImage,
    level: "Advanced",
  },
];

const CourseCard = ({ course }) => {
  const {
    title,
    instructor,
    rating,
    reviewCount,
    price,
    originalPrice,
    studentsEnrolled,
    duration,
    isPopular,
    level,
    image,
  } = course;

  const navigate = useNavigate();

  const courseDetails = () => {
    navigate("/courses/python");
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-gray-800 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isPopular && (
          <div className="absolute left-0 top-4 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1 text-sm font-bold text-white shadow-lg">
            BESTSELLER
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white">
              {level}
            </span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="mb-2 line-clamp-2 min-h-[48px] font-semibold text-white group-hover:text-blue-600">
          {title}
        </h3>

        {/* Instructor */}
        <p className="mb-2 text-sm text-white">{instructor}</p>

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
            ({reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Course Meta */}
        <div className="mb-3 flex flex-wrap gap-3 text-sm text-white">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            {studentsEnrolled} students
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">₹{price}</span>
            <span className="text-sm text-white line-through">
              ₹{originalPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex scale-0 flex-col justify-end bg-black/80 p-5 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <h4 className="mb-2 text-lg font-bold">{title}</h4>
        <div className="mb-3 flex items-center gap-2">
          <Award className="h-5 w-5 text-yellow-400" />
          <span className="text-sm">Certificate of completion</span>
        </div>
        <Link
          to={"/courses/python/current"}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          View Course
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
};

const CoursePageAccordingToTag = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(99, 102, 241, 0.05) 50%, 
            rgba(255, 255, 255, 0) 100%)`,
        }}
      />
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <nav className="mb-8">
          <ul className="flex items-center gap-4 text-sm text-gray-400">
            <li className="hover:text-white">Home</li>
            <li>•</li>
            <li className="hover:text-white">Catalog</li>
            <li>•</li>
            <li className="text-white">Python</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-white">Python</h1>
          <p className="max-w-3xl text-lg text-gray-400">
            Python is a versatile, high-level programming language known for its
            simplicity and readability. Perfect for beginners and professionals
            alike, Python powers everything from web development to data science
            and AI.
          </p>
        </div>

        {/* Course Sections */}
        <div className="space-y-16">
          {/* Getting Started Section */}
          <section>
            <h2 className="mb-8 text-2xl font-bold text-white">
              Courses to get you started
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>

          {/* Top Courses Section */}
          <section>
            <h2 className="mb-8 text-2xl font-bold text-white">
              Top courses in Python and Machine Learning
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>

          {/* Frequently Bought Together */}
          <section>
            <h2 className="mb-8 text-2xl font-bold text-white">
              Frequently Bought Together
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {courses.slice(0, 2).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

    </div>
  );
};

export default CoursePageAccordingToTag;
