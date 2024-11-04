import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles, Twitter } from 'lucide-react'
import React from 'react'
import logo from "../../images/Logo.webp"
function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 text-gray-100 shadow-transparent border-gray-800 border-t">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={logo} className="h-10 sm:pl-2 md:h-14 -ml-3"></img>
                {/* <Sparkles className="text-blue-500" /> */}
                <span className="text-2xl font-bold text-white">
                  EmpowerJourney
                </span>
              </div>
              <p className="text-sm">
                Transforming lives through innovative education and personalized
                learning experiences.
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
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About Us", "Courses", "Teachers", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-blue-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>contact@empowerjourney.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>+91 1234567890</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>123 Learning Street, Education City</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Newsletter
              </h4>
              <p className="text-sm mb-4">
                Subscribe to get updates about new courses and features.
              </p>
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
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
