import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

import Course_Card from "./Course_Card";

const CourseSlider = ({ Courses }) => {
  // console.log("COURSE SLIDER : ", Courses);
  // console.log("LENGTH : ", Courses?.length);
  return (
    <>
      {Courses?.length ? (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {Courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Course_Card course={course}></Course_Card>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;
