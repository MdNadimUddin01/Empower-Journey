import React, { useEffect, useState } from "react";
import {
  Star,
  Clock,
  Globe,
  ChevronDown,
  PlayCircle,
  Award,
  MonitorSmartphone,
  Share2,
  ArrowUp,
} from "lucide-react";
import courseImage from "./images/python.jpg";
const CoursePage = () => {
  const sections = [
    {
      title: "Introduction & Basics",
      lectures: 5,
      duration: "51min",
      topics: [
        {
          title: "Why Python",
          duration: "02:09",
          description:
            "Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.",
        },
        { title: "How to install Python and Sublime text", duration: "02:09" },
        {
          title: "Variable Declaration and Memory Allocation",
          duration: "02:09",
        },
        { title: "Built-in Python Datatypes", duration: "02:09" },
        { title: "Python Operators", duration: "02:00" },
      ],
    },
    {
      title: "Conditional Statements and Loops",
      lectures: 5,
      duration: "51min",
      topics: [],
    },
    {
      title: "Python Data Types - String, Lists, Tuple, Dictionaries",
      lectures: 5,
      duration: "51min",
      topics: [],
    },
    {
      title: "Python Functions",
      lectures: 5,
      duration: "51min",
      topics: [],
    },
    {
      title: "Python Modules and Packages",
      lectures: 5,
      duration: "51min",
      topics: [],
    },
  ];

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
      {/* Header */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <nav className="text-gray-400 text-sm">
              Home / Learning / <span className="text-yellow-500">Python</span>
            </nav>

            <h1 className="text-3xl font-bold">
              The Complete Python Bootcamp From Zero to Hero in Python
            </h1>

            <p className="text-gray-400">
              This Python for beginners course will help you to become Zero to
              Hero. Learn Python Programming in Easy Way.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">4.5</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-400">(650 ratings)</span>
              </div>
              <span className="text-gray-400">332,402 students</span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Created at 02/2020
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                English
              </div>
            </div>

            {/* What you'll learn */}
            <div className="border border-gray-700 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold">What you'll learn</h2>
              <ul className="space-y-2">
                <li>Introduction to Python and Python 3</li>
                <li>
                  Understand the basics: Data types, Loops, Conditional
                  statements, Functions and Modules
                </li>
                <li>Learn object oriented programming in Python</li>
                <li>
                  Learn how to make your own web-scraping tool using Python
                </li>
                <li>Know how to Read and Parse JSON and XML files</li>
              </ul>
            </div>

            {/* Course Content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Course content</h2>
                <button className="text-yellow-500 text-sm">
                  Collapse all sections
                </button>
              </div>
              <div className="text-sm text-gray-400">
                10 sections • 41 lectures • 7h 57m total length
              </div>

              <div className="space-y-2">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 rounded-lg"
                  >
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ChevronDown className="w-4 h-4" />
                        <span>{section.title}</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {section.lectures} lectures • {section.duration}
                      </div>
                    </div>

                    {section.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="border-t border-gray-700 p-4 pl-10 flex items-center gap-4"
                      >
                        <PlayCircle className="w-4 h-4 text-gray-400" />
                        <div className="flex-1">
                          <div>{topic.title}</div>
                          {topic.description && (
                            <div className="text-sm text-gray-400 mt-1">
                              {topic.description}
                            </div>
                          )}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {topic.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 bg-gray-800 h-fit rounded-lg">
          <img src={courseImage} className="object-cover rounded-lg"></img>
          <div className=" rounded-lg p-6 space-y-4 sticky top-8">
            <div className="text-3xl font-bold">Rs. 1,200</div>

            <button className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg">
              Add to Cart
            </button>

            <button className="w-full bg-gray-700 text-white font-semibold py-3 rounded-lg">
              Buy now
            </button>

            <div className="text-center text-sm">
              30-Day Money-Back Guarantee
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">This course includes:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <PlayCircle className="w-4 h-4 text-teal-500" />
                  <span>8 hours on-demand video</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-500" />
                  <span>Full Lifetime access</span>
                </li>
                <li className="flex items-center gap-2">
                  <MonitorSmartphone className="w-4 h-4 text-teal-500" />
                  <span>Access on Mobile and TV</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-500" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
            </div>

            <button className="w-full flex items-center justify-center gap-2 text-sm">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
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

export default CoursePage;
