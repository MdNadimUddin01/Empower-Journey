import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState , useRef, useEffect} from "react";
import bg from "../assets/background.avif";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const [type, settype] = useState(0);
  const [sendOtp, setSendOtp] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [isResendActive, setIsResendActive] = useState(false);
  const inputRefs = useRef([]);
  const [error, setError] = useState('');

  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");
  const [mobile , setMobile] = useState(0);
  const [signupError , setSignUpError] = useState("");
  // const []

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    let timer;
    if (countdown > 0 && !isResendActive) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (countdown === 0 && !isResendActive) {
      setIsResendActive(true);
    }
    return () => clearInterval(timer);
  }, [countdown, isResendActive]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Move to next input if value is entered
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    
    // Allow tab navigation
    if (e.key === 'Tab') {
      e.preventDefault();
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }

    // Allow arrow key navigation
    if (e.key === 'ArrowRight' && index < 5) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    
    if (pastedData.some(char => isNaN(char))) {
      setError('Please paste numbers only');
      return;
    }

    const newOtp = [...otp];
    pastedData.forEach((value, index) => {
      if (index < 6) {
        newOtp[index] = value;
      }
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(5, pastedData.length)]?.focus();
  };

  const handleSubmit = async() => {

    if (otp.some(digit => digit === '')) {
      setError('Please enter all digits');
      return;
    }
    
    // Simulate API call
    // console.log('Submitted OTP:', otp.join(''));
    // setSuccess(true);
    let otpValue = "";

    otp.forEach((value) => {
      otpValue = otpValue + (value);
    })
    // console.log("VALUE : " , otpValue)

    const accountType = type === 1 ? "Instructor" : "Student";
    let toastId = toast.loading('Waiting...');

    try{

      const response = await axios.post("http://localhost:4000/api/v1/signup", {firstName , lastName , email , password , confirmPassword , otp:otpValue , accountType});
      toast.remove(toastId)
      toast.success(response?.data?.message)
      setSendOtp(true)
      navigate("/");

    }catch(error){

      const {message} = error.response.data
      // console.log(message)
      toast.remove(toastId)
      toast.error(message)

    }



  };

  const handleResend = async() => {
    if (!isResendActive) return;
    
    // Reset countdown and disable resend
    setCountdown(30);
    setIsResendActive(false);
    
    // Simulate sending new OTP
    // console.log('Resending OTP...');

    let toastId;
    try{
      toastId = toast.loading('Waiting...');

      setSignUpError("");

      const response = await axios.post("http://localhost:4000/api/v1/sendOtp" , {email});
      console.log(response);

      toast.remove(toastId)
      toast.success(response?.data?.message)
      setSendOtp(true)

    }catch(error){

      const {message} = error.response.data
      toast.remove(toastId)
      toast.error(message)

    }

  };

  const otpSend = async() => {

    let toastId;

    try{

      if(!email){
        setSignUpError("email is required");
        return;
      }
      if(!firstName){
        setSignUpError("firstName is required");
        return;
      }
      if(!lastName){
        setSignUpError("lastName is required");
        return;
      }
      if(!password){
        setSignUpError("password is required");
        return;
      }
      if(!confirmPassword){
        setSignUpError("Confirm Password is required");
        return;
      }

      toastId = toast.loading('Waiting...');

      setSignUpError("");

      const response = await axios.post("http://localhost:4000/api/v1/sendOtp" , {email});
      console.log(response);

      toast.remove(toastId)
      toast.success(response?.data?.message)
      setSendOtp(true)


    }catch(error){

      const {message} = error.response.data
      // console.log(message)
      toast.remove(toastId)
      toast.error(message)

    }
  }

  return (
    <div className="relative h-screen font-sans">
      {/* Background container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content container */}
      {!sendOtp && (
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-xl shadow-2xl gap-y-5 w-full max-w-lg">
            <h1 className="mb-5 flex justify-center text-3xl font-extrabold text-blue-700 underline underline-offset-4">
              Sign Up
            </h1>
            {/* Student and instructor toggles */}
            <div className="grid grid-cols-2 gap-5 mb-8">
              <button
                onClick={() => settype(0)}
                className={`${
                  type === 0 ? "bg-blue-700" : "bg-gray-300"
                } rounded-md p-3 text-white text-lg transition duration-300`}
              >
                Student
              </button>
              <button
                onClick={() => settype(1)}
                className={`${
                  type === 1 ? "bg-blue-700" : "bg-gray-300"
                } rounded-md p-3 text-white text-lg transition duration-300`}
              >
                Instructor
              </button>
            </div>

            {/* Input fields */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full mb-4 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full mb-4 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mb-4 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300"
              />
              <input
                type="tel"
                placeholder="Mobile No"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full mb-6 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300"
              />
              {
              signupError && (
                <p className="text-red-500 text-sm">{signupError}</p>
              )
            }
            </div>

            {/* Buttons */}
            
            <div className="grid grid-cols-2 gap-5">
              <button onClick={otpSend} className="w-full p-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                Sign Up
              </button>
              <button
                onClick={() => navigate("/signin")}
                className="w-full p-3 bg-gray-300 text-black rounded-xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}

      {
        sendOtp && (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 transition-all duration-200">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Enter Verification Code</h2>
          <p className="text-gray-600">
            We've sent a verification code to
            <br />
            <span className="font-medium text-gray-800">example@email.com</span>
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center gap-2 sm:gap-4 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`w-12 h-12 sm:w-14 sm:h-14 text-2xl font-bold text-center border-2 rounded-xl
                  transition-all duration-300 transform
                  ${error ? 'border-red-500 bg-red-50' : 'border-gray-300'}
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none
                  hover:border-blue-400 hover:shadow-md
                  
                  `}
              />
            ))}
          </div>
          

        </div>

        <button
          onClick={handleSubmit}
          className={`w-full py-3 rounded-lg font-medium text-white
            transition-all duration-300 transform
            bg-blue-500 hover:bg-blue-600
            hover:shadow-lg active:scale-95`}
        >
          Sign Up
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Didn't receive the code?{' '}
            <button
              onClick={handleResend}
              className={`font-medium transition-colors duration-300
                ${isResendActive 
                  ? 'text-blue-500 hover:text-blue-600 cursor-pointer' 
                  : 'text-gray-400 cursor-not-allowed'}`}
              disabled={!isResendActive}
            >
              {isResendActive 
                ? 'Resend OTP' 
                : `Resend in ${countdown}s`}
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
          </div>
        )
      }
    </div>
  );
}
