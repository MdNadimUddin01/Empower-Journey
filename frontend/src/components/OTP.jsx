import React, { useState } from 'react';
import "./OTP.css"
const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input automatically
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // Handle backspace to move focus back
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    // Implement the OTP submission logic here
    alert(`OTP entered: ${otp.join("")}`);
  };

  return (
    <div className="otp-card">
      <h2>Verify Your Email</h2>
      <p>Please enter the OTP sent to your registered email address.</p>
      <div className="otp-container">
        {otp.map((data, index) => (
          <input
            className="otp-input"
            type="text"
            name="otp"
            maxLength="1"
            key={index}
            id={`otp-input-${index}`}
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      <div className="submit-btn-container">
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <p>
        Didn't receive the OTP? <a href="#">Reset Password</a>
      </p>
    </div>
  );
};
export default OtpPage;