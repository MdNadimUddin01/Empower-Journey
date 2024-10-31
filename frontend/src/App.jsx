import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Signup } from './components/Signup'
import { Signin } from './components/Signin'
import { LandingPage } from './components/LandingPage'
import toast, { Toaster } from 'react-hot-toast';
import CourseCard from './components/Course/CourseCard'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Otp from './components/Course/Otp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<LandingPage />} />
        <Route path='/profile' element={<LandingPage />} />
        <Route path='/courses' element={<CourseCard />} />
        <Route path='/home' element={<Home />} />
        <Route path='/otp' element={<Otp />} />
        
      </Routes>
    </BrowserRouter>
    <Toaster></Toaster>
    </div>
  )
}

export default App
