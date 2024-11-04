import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import AnimatedFeatures from "../components/home/AnimatedFeatures";
import CodeBlocks from "../components/home/CodeBlocks";
import HeroSection from "../components/home/HeroSection";
import Card from "../components/home/Card";

const Home = () => {
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
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Interactive Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(99, 102, 241, 0.05) 50%, 
            rgba(255, 255, 255, 0) 100%)`,
        }}
      />

      {/* Main Content */}
      <HeroSection />

      <div className="w-[80%] mx-auto z-10 relative">
        <CodeBlocks
          position={"md:flex-row"}
          heading={
            <div className="text-4xl font-semibold">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                coding potential
              </span>{" "}
              with our online courses
            </div>
          }
          subheading="Our courses are designed and taught by industry experts."
          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          codeColor={"text-yellow-25"}
          backgroundGradient={<div className="codeblock1 absolute"></div>}
        />
      </div>

      <div>
        <AnimatedFeatures />
      </div>

      <div className="w-[80%] mx-auto z-10 relative">
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className="text-4xl font-semibold">
              Start{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-600 text-transparent bg-clip-text">
                coding in seconds
              </span>
            </div>
          }
          subheading="Get started with hands-on coding right from the first lesson."
          codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          codeColor={"text-white"}
          backgroundGradient={<div className="codeblock2 absolute"></div>}
        />
      </div>

      {/* Scroll to Top Button */}
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

export default Home;
