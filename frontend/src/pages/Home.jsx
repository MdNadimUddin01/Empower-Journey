// import React from 'react';
// import { 
//   BookOpen, 
//   Users, 
//   Trophy,
//   Star,
//   ArrowRight,
//   Play,
//   CheckCircle
// } from 'lucide-react';

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Navigation Bar */}
//       <nav className="bg-white shadow-sm fixed w-full z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <span className="text-2xl font-bold text-blue-600">EmpowerJourney</span>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#" className="text-gray-700 hover:text-blue-600">Courses</a>
//               <a href="#" className="text-gray-700 hover:text-blue-600">Paths</a>
//               <a href="#" className="text-gray-700 hover:text-blue-600">Enterprise</a>
//               <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-5xl font-bold text-gray-900 mb-6">
//                 Empower Your Future Through Learning
//               </h1>
//               <p className="text-xl text-gray-600 mb-8">
//                 Access world-class education resources and expert-led courses to achieve your career goals.
//               </p>
//               <div className="flex space-x-4">
//                 <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center">
//                   Start Learning <ArrowRight className="ml-2" size={20} />
//                 </button>
//                 <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 flex items-center">
//                   Watch Demo <Play className="ml-2" size={20} />
//                 </button>
//               </div>
//               <div className="mt-8 flex items-center space-x-4">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3, 4].map((i) => (
//                     <img 
//                       key={i}
//                       src={`/api/placeholder/32/32`} 
//                       alt={`User ${i}`}
//                       className="w-8 h-8 rounded-full border-2 border-white"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-600">
//                   Joined by 50,000+ learners
//                 </p>
//               </div>
//             </div>
//             <div>
//               <img 
//                 src="/api/placeholder/600/400" 
//                 alt="Learning illustration" 
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { icon: BookOpen, label: 'Courses', value: '500+' },
//               { icon: Users, label: 'Students', value: '50K+' },
//               { icon: Trophy, label: 'Certificates', value: '25K+' },
//               { icon: Star, label: 'Rating', value: '4.8/5' },
//             ].map((stat, i) => (
//               <div key={i} className="text-center">
//                 <stat.icon className="w-8 h-8 mx-auto text-blue-600 mb-4" />
//                 <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
//                 <p className="text-gray-600">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Courses */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Featured Courses
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Explore our most popular courses and start your learning journey today.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img 
//                   src={`/api/placeholder/400/200`}
//                   alt={`Course ${i}`}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <div className="text-sm text-blue-600 mb-2">TECHNOLOGY</div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     Advanced Web Development
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Master modern web development with hands-on projects
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-2xl font-bold text-gray-900">$99</span>
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Why Choose EmpowerJourney?
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Expert Instructors',
//                 description: 'Learn from industry professionals with years of experience'
//               },
//               {
//                 title: 'Flexible Learning',
//                 description: 'Study at your own pace with lifetime access to courses'
//               },
//               {
//                 title: 'Career Support',
//                 description: 'Get guidance and support to achieve your career goals'
//               }
//             ].map((feature, i) => (
//               <div key={i} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
//                 <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-blue-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Ready to Start Your Learning Journey?
//           </h2>
//           <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join thousands of learners who have transformed their careers through EmpowerJourney.
//           </p>
//           <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
//             Get Started Today
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-white text-lg font-bold mb-4">EmpowerJourney</h3>
//               <p className="text-sm">
//                 Empowering individuals through quality education and skill development.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-white text-lg font-bold mb-4">Courses</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-white">Technology</a></li>
//                 <li><a href="#" className="hover:text-white">Business</a></li>
//                 <li><a href="#" className="hover:text-white">Design</a></li>
//                 <li><a href="#" className="hover:text-white">Marketing</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white text-lg font-bold mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-white">About Us</a></li>
//                 <li><a href="#" className="hover:text-white">Careers</a></li>
//                 <li><a href="#" className="hover:text-white">Blog</a></li>
//                 <li><a href="#" className="hover:text-white">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white text-lg font-bold mb-4">Legal</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-white">Terms</a></li>
//                 <li><a href="#" className="hover:text-white">Privacy</a></li>
//                 <li><a href="#" className="hover:text-white">Cookies</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//             <p>&copy; 2024 EmpowerJourney. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { 
  Sparkles,
  Brain,
  Rocket,
  Target,
  ChevronRight,
  Play,
  MousePointer2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
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

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Interactive Background */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(99, 102, 241, 0.05) 50%, 
            rgba(255, 255, 255, 0) 100%)`
        }}
      />

      {/* Hero Section */}
      <section className="pt-8 md:pt-16 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="relative text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                    Learn
                  </span>
                  <br />
                  Without Limits
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Interactive learning experiences that adapt to your journey
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="group relative px-8 py-3 bg-blue-600 text-white rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center justify-center">
                      Start Learning
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="group px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg flex items-center justify-center">
                    <Play className="mr-2 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
            
            {/* Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 md:order-2">
              {[
                { icon: Brain, title: 'AI Learning', color: 'blue' },
                { icon: Rocket, title: 'Fast Track', color: 'purple' },
                { icon: Target, title: 'Goal Focus', color: 'indigo' },
                { icon: MousePointer2, title: 'Interactive', color: 'cyan' }
              ].map((card, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div
                    className={`p-6 rounded-xl bg-white shadow-lg transform transition-all duration-300
                      ${activeCard === index ? 'scale-105' : 'scale-100'}
                      hover:shadow-2xl border border-gray-100`}
                  >
                    <card.icon className="w-8 h-8 mb-4 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      Experience the future of learning with our innovative platform
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="transform transition-transform hover:scale-105"
              >
                <div className="relative group rounded-xl overflow-hidden bg-white shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity" />
                  <img
                    src={`/api/placeholder/320/200`}
                    alt={`Course ${item}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2">TECHNOLOGY</div>
                    <h3 className="text-xl font-bold mb-2">Web Development</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200" />
                        <span className="ml-2 text-sm text-gray-600">John Doe</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">$99</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Adaptive Learning', description: 'AI-powered personalized learning paths' },
              { title: 'Live Collaboration', description: 'Real-time interaction with peers and mentors' },
              { title: 'Project-Based', description: 'Learn by doing with real-world projects' }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-xl shadow-lg overflow-hidden"
                style={{
                  transform: `translateY(${scrollPosition * 0.1}px)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-gray-400">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="text-blue-500" />
                <span className="text-2xl font-bold text-white">EmpowerJourney</span>
              </div>
              <p className="text-sm">
                Transforming lives through innovative education and personalized learning experiences.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Courses', 'Teachers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-500 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>contact@empowerjourney.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>123 Learning Street, Education City</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe to get updates about new courses and features.</p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm">
                © 2024 EmpowerJourney. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Home;