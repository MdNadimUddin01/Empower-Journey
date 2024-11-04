import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import LeftButton from "../components/button/LeftButton";
import studyImage from "../images/about/study.jpg"
import workingImage from "../images/about/working.jpg"
import notesImage from "../images/about/notes.jpg"
import teamImage from "../images/about/teamCollaboration.jpg"

function About() {
  const students = [
    {
      image: studyImage,
      alt: "Student studying on computer",
    },
    {
      image: workingImage,
      alt: "Student working on laptop",
    },
    {
      image: notesImage,
      alt: "Student taking notes",
    },
  ];

  const stats = [
    {
      number: "5K",
      label: "Active Students",
    },
    {
      number: "10+",
      label: "Mentors",
    },
    {
      number: "200+",
      label: "Courses",
    },
    {
      number: "50+",
      label: "Awards",
    },
  ];

  const features = [
    {
      title: "Curriculum Based on Industry Needs",
      description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
    {
      title: "Our Learning Methods",
      description: "Empower Journey partners with more than 275+ leading universities and companies to bring"
    },
    {
      title: "Certification",
      description: "Empower Journey partners with more than 275+ leading universities and companies to bring"
    },
    {
      title: "Rating \"Auto-grading\"",
      description: "Empower Journey partners with more than 275+ leading universities and companies to bring"
    },
    {
      title: "Ready to Work",
      description: "Empower Journey partners with more than 275+ leading universities and companies to bring"
    }
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
    <div className="bg-slate-900">
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(99, 102, 241, 0.05) 50%, 
            rgba(255, 255, 255, 0) 100%)`,
        }}
      />
      {/* Section 1 */}
      <section className=" text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Driving Innovation in Online Education for a{" "}
              <span className="text-cyan-400">Brighter Future</span>
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              Empower Journey is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {students.map((student, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={student.image}
                  alt={student.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              We are passionate about revolutionizing the way we learn. Our
              innovative platform
              <span className="text-cyan-400"> combines technology </span>
              <span className="text-orange-500">expertise</span>, and community
              to create an
              <span className="text-orange-500">
                {" "}
                unparalleled educational experience
              </span>
              .
            </h2>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Founding Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-36">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-red-500">
                Our Founding Story
              </h2>
              <div className="space-y-6 text-slate-400">
                <p>
                  Our e-learning platform was born out of a shared vision and
                  passion for transforming education. It all began with a group
                  of educators, technologists, and lifelong learners who
                  recognized the need for accessible, flexible, and high-quality
                  learning opportunities in a rapidly evolving digital world.
                </p>
                <p>
                  As experienced educators ourselves, we witnessed firsthand the
                  limitations and challenges of traditional education systems.
                  We believed that education should not be confined to the walls
                  of a classroom or restricted by geographical boundaries. We
                  envisioned a platform that could bridge these gaps and empower
                  individuals from all walks of life to unlock their full
                  potential.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-red-500/20 rounded-lg blur-lg"></div>
              <img
                src={teamImage}
                alt="Team collaboration"
                className="relative rounded-lg w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Vision and Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-24">
            {/* Vision */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-6 text-orange-500">
                Our Vision
              </h2>
              <p className="text-slate-400">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                Our Mission
              </h2>
              <p className="text-slate-400">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-[#0B1120] bg-gradient-to-b from-[#0B1120] to-[#1F2937] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#00A6ED]/10 rounded-lg blur-xl group-hover:bg-[#00A6ED]/20 transition-all duration-300"></div>
              <div className="relative text-center p-6 rounded-lg border border-slate-700 bg-[#0B1120]/50 hover:border-[#00A6ED]/50 transition-all duration-300">
                <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00A6ED] to-[#00D1FF] bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-slate-400 text-lg">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 4 */}
    <section className=" py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            World-Class Learning for{' '}
            <span className="text-[#00A6ED]">Anyone</span>,{' '}
            <span className="text-[#00A6ED]">Anywhere</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Empower Journey partners with more than 275+ leading universities and companies to bring
            flexible, affordable, job-relevant online learning to individuals and organizations
            worldwide.
          </p>
          <LeftButton title={`Start Learning`}></LeftButton>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 
                ${index % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-900/50'}`}
            >
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-400 flex-grow">
                  {feature.description}
                </p>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-[#00A6ED]/0 hover:border-[#00A6ED]/50 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
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

}

export default About;
