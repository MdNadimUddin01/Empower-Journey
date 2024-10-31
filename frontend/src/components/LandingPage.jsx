import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import learningImage from './landing page.png';
import { FiCheckCircle } from "react-icons/fi";
import Navbar from './Navbar';
export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page dark-theme">
      {/* Header Section */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Unleash Potential with <span className="highlight">Online Learning</span></h1>
          <p>
            Learn comfortably at your own pace and unlock your potential. Whether you are learning for a career move or personal growth,
            explore thousands of learning resources to get ahead.
          </p>
          <button className="btn-signup" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
        <div className="hero-image">
          <img src={learningImage} alt="Learning illustration" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="text-3xl font-bold text-orange-500">Why Choose Empower Journey</h2>
        <p>Here, courses and resources are tailored for your success. Our online courses, certifications, and expert instructors will help you reach your goals.</p>
        <div className="features">
            <div className="features-icons">
                <div className="feature-item">
                    <FiCheckCircle className="text-green-500 text-3xl mb-2" />
                    <h3 className="text-xl">Extensive Resources</h3>
                    <p className="feature-desc">Access a variety of high-quality courses and certifications.</p>
                </div>
                <div className="feature-item">
                    <FiCheckCircle className="text-green-500 text-3xl mb-2" />
                    <h3 className="text-xl">Expert Instructors</h3>
                    <p className="feature-desc">Learn from industry leaders and experienced professionals.</p>
                </div>
                <div className="feature-item">
                    <FiCheckCircle className="text-green-500 text-3xl mb-2" />
                    <h3 className="text-xl">Flexible Learning</h3>
                    <p className="feature-desc">Study at your own pace, with guidance and support along the way.</p>
                </div>
            </div>

          
        </div>
      </section>

      {/* Latest Courses Section */}
      <section className="latest-courses">
        <h2>Latest Courses</h2>
        <div className="courses-grid">
          <div className="course-item">Marketing</div>
          <div className="course-item">Music</div>
          <div className="course-item">Business</div>
          <div className="course-item">Arts & Design</div>
        </div>
        <button className="view-more-button">View More</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>Empower Journey</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
