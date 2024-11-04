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
import {Provider} from "react-redux"
import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import Footer from './components/home/Footer'

const store = configureStore({
  reducer : rootReducer,
})

function App() {

  return (
    <Provider store={store}>
      <div>
      
      <BrowserRouter>
      <Navbar></Navbar>
      <div className='pt-16'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/profile' element={<Home />} />
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
