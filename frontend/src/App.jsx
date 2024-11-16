import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Provider, useSelector } from "react-redux";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import Footer from "./components/home/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProfileDashboard from "./pages/ProfileDashboard";
import CoursePage from "./components/Course/CoursePage";
import CoursePageAccordingToTag from "./components/Course/CoursePageAccordingToTag";
import OTPInput from "./components/OtpInput";
import MyProfile from "./components/Dashboard/MyProfile.jsx";
import PrivateRoute from "./components/Auth/PrivateRoute";
import OpenRoute from "./components/Auth/OpenRoute";
import Error from "./pages/Error";
import { ACCOUNT_TYPE } from "../utils/constants";
import AddCourse from "./components/Dashboard/AddCourse/index";
import MyCourses from "./components/Dashboard/MyCourses";
import EditCourse from "./components/Dashboard/EditCourse.jsx/EditCourse";
import Catalog from "./pages/Catalog";

function App() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="pt-16 bg-slate-900">
          <div
            className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out"
            style={{
              background: ` 
              rgba(59, 130, 246, 0.1) 0%, 
              rgba(99, 102, 241, 0.05) 50%, 
              rgba(255, 255, 255, 0) 100%)`,
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog/:catalogName" element={<Catalog/>} />


            <Route
              path="about"
              element={
                <OpenRoute>
                  <About />
                </OpenRoute>
              }
            />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path='/dashboard/profile' element={<ProfileDashboard />} /> */}
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            {/* <Route path='/courses' element={<CourseCard />} /> */}
            <Route path="/courses/python/current" element={<CoursePage />} />
            <Route
              path="/courses/python"
              element={<CoursePageAccordingToTag />}
            />
            <Route path="/otp" element={<OTPInput />} />

            <Route
              element={
                <PrivateRoute>
                  <ProfileDashboard />
                </PrivateRoute>
              }
            >
              <Route path="dashboard/my-profile" element={<MyProfile />} />

              {user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route path="dashboard/cart" element={<Cart />} />
                  <Route
                    path="dashboard/enrolled-courses"
                    element={<EnrolledCourses />}
                  />
                </>
              )}

              {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                <>
                  <Route path="dashboard/add-course" element={<AddCourse />} />
                  <Route path="dashboard/my-courses" element={<MyCourses />} />
                  <Route
                    path="dashboard/edit-course/:courseId"
                    element={<EditCourse />}
                  />
                </>
              )}
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
