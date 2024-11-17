import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signup } from "./components/Signup.jsx";
import { Signin } from "./components/Signin.jsx";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { Provider, useSelector } from "react-redux";
import Catalog from "./pages/Catalog.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import OTPInput from "./components/OtpInput.jsx";
import PrivateRoute from "./components/Auth/PrivateRoute.jsx";
import ProfileDashboard from "./pages/ProfileDashboard.jsx";
// import MyProfile from "./components/Dashboard/MyProfile.jsx";
import EnrolledCourses from "./components/Dashboard/EnrolledCourses.jsx";
import AddCourse from "./components/Dashboard/AddCourse/index.jsx";
import MyCourses from "./components/Dashboard/MyCourses.jsx";
import EditCourse from "./components/Dashboard/EditCourse.jsx/EditCourse.jsx";
import ViewCourse from "./pages/ViewCourse.jsx";
import VideoDetails from "./components/viewCourse/VideoDetails.jsx";
import Error from "./pages/Error.jsx";
import Footer from "./components/home/Footer.jsx";
import { ACCOUNT_TYPE } from "../utils/constants.js";

// import Footer from "./components/home/Footer";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import ProfileDashboard from "./pages/ProfileDashboard";
// import CoursePage from "./components/Course/CoursePage";
// import CoursePageAccordingToTag from "./components/Course/CoursePageAccordingToTag";
// import OTPInput from "./components/OtpInput";
// import PrivateRoute from "./components/Auth/PrivateRoute";
// import OpenRoute from "./components/Auth/OpenRoute";
// import Error from "./pages/Error";
// import AddCourse from "./components/Dashboard/AddCourse/index";
// import MyCourses from "./components/Dashboard/MyCourses";
// import EditCourse from "./components/Dashboard/EditCourse.jsx/EditCourse";
// import Catalog from "./pages/Catalog";
// import CourseDetails from "./pages/CourseDetails";
// import EnrolledCourses from "./components/Dashboard/EnrolledCourses";
// import ViewCourse from "./pages/ViewCourse";
// import VideoDetails from "./components/viewCourse/VideoDetails";
// import MyProfile from "./components/Dashboard/MyProfile";

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
            <Route path="catalog/:catalogName" element={<Catalog />} />
            <Route path="courses/:courseId" element={<CourseDetails />} />

            <Route path="/about" element={<About />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />

            {/* <Route path="/courses/python/current" element={<CoursePage />} /> */}

            {/* <Route
              path="/courses/python"
              element={<CoursePageAccordingToTag />}
            /> */}

            <Route path="/otp" element={<OTPInput />} />

            {/* Private Route - for Only Logged in User */}
            <Route
              element={
                <PrivateRoute>
                  <ProfileDashboard />
                </PrivateRoute>
              }
            >
              {/* Route for all users */}
              {/* <Route path="dashboard/my-profile" element={<MyProfile />} /> */}

              {/* Route only for Students */}
              {user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  {/* <Route path="dashboard/cart" element={<Cart />} /> */}
                  <Route
                    path="dashboard/enrolled-courses"
                    element={<EnrolledCourses />}
                  />
                </>
              )}

              {/* Route only for Instructors */}
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

            {/* For the watching course lectures */}
            <Route
              element={
                <PrivateRoute>
                  <ViewCourse />
                </PrivateRoute>
              }
            >
              {user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route
                    path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                    element={<VideoDetails />}
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
