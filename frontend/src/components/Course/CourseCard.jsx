import React, { useState } from "react";
import { Clock, Users, BookOpen } from "lucide-react";
import python from "./images/python.jpg";
const CourseCard = () => {

    const [courseProgress , setCourseProgress] = useState(false)

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 mt-6 ml-6">
      <div className="relative">
        <img
          src={python}
          alt="Course thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          Featured
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm text-blue-600 font-semibold mb-2">
          PROGRAMMING
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Introduction to Python Programming
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Learn Python from scratch with hands-on projects and real-world
          applications
        </p>

        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>8 weeks</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>1.2k students</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={16} />
            <span>24 lessons</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/api/placeholder/32/32"
              alt="Instructor"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-900">
              Md Nadim Uddin
            </span>
          </div>
          <span className="text-lg font-bold text-blue-600">$49.99</span>
        </div>
      </div>

      {courseProgress && <div className="px-6 py-4 bg-gray-50 border-t">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">75% completed</p>
      </div>}
    </div>
  );
};

export default CourseCard;
