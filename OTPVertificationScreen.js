import React, { useState } from "react";

const OTPVerificationScreen = ({ otp, verifyOtp }) => {
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleVerify = () => {
    if (enteredOtp === otp) {
      // Simulate OTP verification via a REST API
      verifyOtp(true);
    } else {
      verifyOtp(false);
    }
  };

  return (
    <div>
      <h2>OTP Verification Screen (Screen-2)</h2>
      <p>Enter the OTP sent to your mobile number.</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={enteredOtp}
        onChange={(e) => setEnteredOtp(e.target.value)}
      />
      <button onClick={handleVerify}>Verify OTP</button>
    </div>
  );
};

export default OTPVerificationScreen;
