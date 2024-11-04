import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Signup } from './components/Signup'
import { Signin } from './components/Signin'
import  { Toaster } from 'react-hot-toast';
import CourseCard from './components/Course/CourseCard'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Otp from './components/Course/Otp'
import {Provider} from "react-redux"
import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import Footer from './components/home/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

const store = configureStore({
  reducer : rootReducer,
})

function App() {

  return (
    <Provider store={store}>
      <div>
      
      <BrowserRouter>
      <Navbar></Navbar>
      <div className='pt-16 bg-slate-900'>
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
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Home />} />
        <Route path='/contactUs' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/courses' element={<CourseCard />} />
        <Route path='/otp' element={<Otp />} />
      </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
    <Toaster></Toaster>
    </div>
    </Provider>

  )
}

export default App
