import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import bg from '../assets/background.avif';
import toast, { Toaster } from 'react-hot-toast';

export function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [type, settype] = useState(0);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  async function loginApi(){

    const toastId = toast.loading('Waiting...');

    try{

      const {data} = await axios.post("http://localhost:4000/api/v1/login" , {email , password})
      // const data = await response.json();

      console.log(data)
      // navigate("/apiTesting")
      toast.remove(toastId)
      toast.success(data.message)

    }catch(error){

      const {message} = error.response.data
      console.log(message)
      toast.remove(toastId)
      toast.error(message)

    }
  }
  

  return (
    <div className="relative h-screen font-sans">
      {/* Background container */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: `url(${bg})` }}>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content container */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-xl shadow-2xl gap-y-5 w-full max-w-lg">
          
          <h1 className="mb-5 flex justify-center text-3xl font-extrabold text-blue-700 underline underline-offset-4">
            Log In
          </h1>

          {/* Student and Instructor toggles */}
          <div className="grid grid-cols-2 gap-5 mb-8">

            <button
              onClick={() => settype(0)}
              className={`${type === 0 ? 'bg-blue-700' : 'bg-gray-300'} rounded-md p-3 text-white text-lg transition duration-300`}>
              Student
            </button>

            <button
              onClick={() => settype(1)}
              className={`${type === 1 ? 'bg-blue-700' : 'bg-gray-300'} rounded-md p-3 text-white text-lg transition duration-300`}>
              Instructor
            </button>
          </div>

          {/* Input fields */}
          <div className="mb-6">

            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" className="w-full mb-4 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300" />
            
            <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" className="w-full mb-4 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300" />
          
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-5">
            <button
              onClick={() => navigate("/signup")}
              className="w-full p-3 bg-gray-300 text-black rounded-xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              Sign Up
            </button>
            <button
              onClick={loginApi}
              className="w-full p-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
