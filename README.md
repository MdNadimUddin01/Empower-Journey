# 📚 Empower Journey – EdTech Platform  

**Empower Journey** is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** based **online learning platform** that enables global access to courses, providing an interactive and scalable learning experience.  

---

<p align="center">
  <img src="docs/image1.png" alt="Homepage Screenshot" width=100%"/>
</p>

<p align="center">
  <img src="docs/image2.png" alt="Aboutpage Screenshot" width="100%"/>
</p>

## 🚀 Features  

- 🌍 **Global Course Accessibility** – Instructors can upload lectures, videos, and resources with ease.  
- 🎥 **Seamless Video Playback** – Optimized for smooth streaming and better engagement.  
- 👩‍🏫 **Instructor Dashboard** – Manage courses, upload resources.  
- 👨‍🎓 **Student Dashboard** – Enroll in courses, view lectures.  
- 🔐 **Secure Authentication & Authorization** – Role-based access for students and instructors.  
- 📈 **Scalable Architecture** – Built to handle a growing user base and course library.  
- 💬 **Enhanced Interaction** – Improved student-instructor communication for an engaging experience.  
- 🎨 **UI/UX Focused Design** – Clean and intuitive interface for better usability.  

<!-- --- -->

## 🛠️ Tech Stack  

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT, bcrypt  
- **Video Handling:** Cloudinary 

<!-- --- -->

## 📂 Project Structure  

```
📦 Empower-Journey
├─ backend
│  ├─ .env.example
│  ├─ .gitignore
│  ├─ config
│  │  ├─ cloudinary.js
│  │  └─ database.js
│  ├─ controller
│  │  ├─ AssignCourse.js
│  │  ├─ Auth.js
│  │  ├─ Category.js
│  │  ├─ Course.js
│  │  ├─ FAQ.js
│  │  ├─ RatingAndReview.js
│  │  ├─ Section.js
│  │  ├─ SubSection.js
│  │  ├─ Tag.js
│  │  └─ User.js
│  ├─ index.js
│  ├─ middleware
│  │  ├─ Auth.js
│  │  ├─ authCourse.js
│  │  └─ multer.js
│  ├─ model
│  │  ├─ Category.js
│  │  ├─ Course.js
│  │  ├─ CourseProgress.js
│  │  ├─ FrequentlyAskedQuestions.js
│  │  ├─ OTP.js
│  │  ├─ RatingAndReview.js
│  │  ├─ Section.js
│  │  ├─ SubSection.js
│  │  ├─ Tag.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ temp
│  │     ├─ .gitkeep
│  │     └─ java.jpg
│  ├─ routes
│  │  ├─ auth.js
│  │  ├─ course.js
│  │  ├─ faq.js
│  │  ├─ ratingAndReview.js
│  │  ├─ section.js
│  │  ├─ subSection.js
│  │  ├─ tag.js
│  │  └─ user.js
│  └─ utils
│     ├─ cloudinary.js
│     ├─ errorHandler.js
│     ├─ imageUploader.js
│     ├─ nodemailer.js
│     └─ secToDuration.js
├─ frontend
│  ├─ .env
│  ├─ .gitignore
│  ├─ README.md
│  ├─ data
│  │  └─ dashboard-links.js
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ background.avif
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ Auth
│  │  │  │  ├─ OpenRoute.jsx
│  │  │  │  └─ PrivateRoute.jsx
│  │  │  ├─ Catalog
│  │  │  │  ├─ CourseSlider.jsx
│  │  │  │  └─ Course_Card.jsx
│  │  │  ├─ ConfirmationModal.jsx
│  │  │  ├─ Course
│  │  │  │  ├─ CourseAccordionBar.jsx
│  │  │  │  ├─ CourseDetailsCard.jsx
│  │  │  │  ├─ CoursePage.jsx
│  │  │  │  ├─ CoursePageAccordingToTag.jsx
│  │  │  │  ├─ CourseSubSectionAccordion.jsx
│  │  │  │  └─ images
│  │  │  │     └─ python.jpg
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ OtpInput.jsx
│  │  │  ├─ RatingStars.jsx
│  │  │  ├─ Signin.jsx
│  │  │  ├─ Signup.jsx
│  │  │  ├─ ViewCourse
│  │  │  │  ├─ CourseReviewModal.jsx
│  │  │  │  ├─ VideoDetails.jsx
│  │  │  │  └─ VideoDetailsSidebar.jsx
│  │  │  ├─ about
│  │  │  │  └─ AboutSection.jsx
│  │  │  ├─ button
│  │  │  │  ├─ IconBtn.jsx
│  │  │  │  ├─ LeftButton.jsx
│  │  │  │  └─ RightButton.jsx
│  │  │  ├─ dashboard
│  │  │  │  ├─ AddCourse
│  │  │  │  │  ├─ CourseBuilder
│  │  │  │  │  │  ├─ CourseBuilderForm.jsx
│  │  │  │  │  │  ├─ NestedView.jsx
│  │  │  │  │  │  └─ SubSectionModal.jsx
│  │  │  │  │  ├─ CourseInformation
│  │  │  │  │  │  ├─ ChipInput.jsx
│  │  │  │  │  │  ├─ CourseInformationForm.jsx
│  │  │  │  │  │  └─ RequirementField.jsx
│  │  │  │  │  ├─ PublishCourse
│  │  │  │  │  │  └─ index.jsx
│  │  │  │  │  ├─ RenderSteps.jsx
│  │  │  │  │  ├─ Upload.jsx
│  │  │  │  │  └─ index.jsx
│  │  │  │  ├─ Cart
│  │  │  │  │  ├─ RenderCartCourses.jsx
│  │  │  │  │  ├─ RenderTotalAmount.jsx
│  │  │  │  │  └─ index.jsx
│  │  │  │  ├─ EditCourse.jsx
│  │  │  │  │  └─ EditCourse.jsx
│  │  │  │  ├─ EnrolledCourses.jsx
│  │  │  │  ├─ InstructorCourses
│  │  │  │  │  └─ CoursesTable.jsx
│  │  │  │  ├─ MyCourses.jsx
│  │  │  │  ├─ MyProfile.jsx
│  │  │  │  └─ Sidebar.jsx
│  │  │  └─ home
│  │  │     ├─ AnimatedFeatures.jsx
│  │  │     ├─ Card.jsx
│  │  │     ├─ CodeBlocks.jsx
│  │  │     ├─ Footer.jsx
│  │  │     ├─ HeroSection.jsx
│  │  │     ├─ UserMenu.jsx
│  │  │     └─ images
│  │  │        ├─ homepage.png
│  │  │        └─ landing page.png
│  │  ├─ images
│  │  │  ├─ Logo.webp
│  │  │  ├─ about
│  │  │  │  ├─ notes.jpg
│  │  │  │  ├─ study.jpg
│  │  │  │  ├─ teamCollaboration.jpg
│  │  │  │  └─ working.jpg
│  │  │  └─ contact
│  │  │     └─ employeesHelpingCustomers.svg
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ About.jsx
│  │  │  ├─ Catalog.jsx
│  │  │  ├─ Contact.jsx
│  │  │  ├─ CourseDetails.jsx
│  │  │  ├─ Error.jsx
│  │  │  ├─ Home.jsx
│  │  │  ├─ ProfileDashboard.jsx
│  │  │  └─ ViewCourse.jsx
│  │  ├─ reducers
│  │  │  └─ index.js
│  │  ├─ services
│  │  │  ├─ apiConnector.js
│  │  │  ├─ apis.js
│  │  │  ├─ formatDate.js
│  │  │  └─ operations
│  │  │     ├─ SettingsAPI.js
│  │  │     ├─ authAPI.js
│  │  │     ├─ courseDetailsAPI.js
│  │  │     ├─ pageAndComponentData.js
│  │  │     ├─ profileAPI.js
│  │  │     └─ studentFeaturesAPI.js
│  │  └─ slices
│  │     ├─ authSlice.js
│  │     ├─ cartSlice.js
│  │     ├─ courseSlice.js
│  │     ├─ profileSlice.js
│  │     └─ viewCourseSlice.js
│  ├─ tailwind.config.js
│  ├─ utils
│  │  ├─ avgRating.js
│  │  └─ constants.js
│  └─ vite.config.js
└─ package-lock.json

```

---

## ⚡ Getting Started  

### 🔧 Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/MdNadimUddin01/Empower-Journey
   cd Empower-Journey
   ```

2. **Install dependencies**  
   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd frontend
   npm install
   ```

3. **Run the development servers**  
   ```bash
   # Start backend
   cd backend
   npm run dev

   # Start frontend
   cd frontend
   npm run dev
   ```

