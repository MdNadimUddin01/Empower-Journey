import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Signup } from './components/Signup'
import { Signin } from './components/Signin'
import { LandingPage } from './components/LandingPage'
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    <Toaster></Toaster>
    </div>
  )
}

export default App
