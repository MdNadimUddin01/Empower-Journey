import React from 'react';
import RightButton from '../button/RightButton';
import LeftButton from '../button/LeftButton';
import homePageImage from "./images/homepage.png"

const HeroSection = () => {
  return (
    <section className="pt-8 md:pt-16 pb-16 relative w-full  ">
      <div className="max-w-7xl mx-auto px-4 md:flex md:flex-row flex flex-col justify-center items-center">
        {/* Text Content Container */}
        <div className="flex flex-col items-center justify-center text-center mb-16 w-[70%]">
          <div className="relative max-w-2xl">

            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Learn
              </span>
              <br />
              Without Limits
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Interactive learning experiences that adapt to your journey. Discover a new way to master skills and achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <LeftButton title="Start Learning" />
              <RightButton title="Watch Demo" />
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex justify-center ml-16 h-[450px] w-[70%]">
          <img 
            src={homePageImage} 
            className="max-w-full h-auto" 
            alt="Homepage illustration" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;