import React from 'react';
import { Mail, Phone } from 'lucide-react';
import contactImage from "../images/contact/employeesHelpingCustomers.svg"
const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Contact Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold ">Contact Us</h1>
            <p className="text-lg ">
              For any queries, Please reach out to us. Our Support team will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <a href="mailto:contact@ineuron.ai" className="text-white hover:text-blue-500">
                contact@empowerjourney.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <a href="tel:+918071176111" className="text-white hover:text-blue-500">
                +91 1234567890
              </a>
            </div>
          </div>

          <div className="pt-8">
            <img 
              src={contactImage}
              alt="Contact illustration" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-6">
            <div className="flex space-x-4 border-b border-gray-200">
              <button className="pb-4 text-blue-600 border-b-2 border-blue-600 font-medium">
                Course Enquiry
              </button>
              <button className="pb-4 text-gray-500 hover:text-gray-700">
                Corporate Enquiry
              </button>
            </div>

            <form className="space-y-6 text-gray-700">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-4 py-3  rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors"
                />
              </div>

              <div className="flex">
                <select className="px-3 py-3 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-gray-500">
                  <option>IN +91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter your phone number *"
                  className="w-full px-4 py-3 rounded-r-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your message *"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;