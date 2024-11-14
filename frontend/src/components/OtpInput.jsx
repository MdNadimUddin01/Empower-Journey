import React, { useState, useRef, useEffect } from 'react';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [isResendActive, setIsResendActive] = useState(false);
  const inputRefs = useRef([]);
  const [error, setError] = useState('');

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

  const handleSubmit = () => {
    if (otp.some(digit => digit === '')) {
      setError('Please enter all digits');
      return;
    }
    
    // Simulate API call
    console.log('Submitted OTP:', otp.join(''));
    // setSuccess(true);
    let otpValue = 0;

    otp.forEach((value) => {
      otpValue = otpValue*10 + parseInt(value);
    })
    console.log("VALUE : " , otpValue)


  };

  const handleResend = () => {
    if (!isResendActive) return;
    
    // Reset countdown and disable resend
    setCountdown(30);
    setIsResendActive(false);
    // Simulate sending new OTP
    console.log('Resending OTP...');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">

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
  );
};

export default OTPInput;