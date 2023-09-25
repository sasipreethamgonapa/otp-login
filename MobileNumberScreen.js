import React, { useState } from "react";

const MobileNumberScreen = ({ setOtp, navigateToVerification }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  const generateOtp = () => {
    // Simulate OTP generation via a REST API
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    // Pass the generated OTP to the parent component
    setOtp(generatedOtp);

    // Navigate to the OTP Verification Screen (Screen-2)
    navigateToVerification();
  };

  return (
    <div>
      <h2>Mobile Number Screen (Screen-1)</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button onClick={generateOtp}>Send OTP</button>
    </div>
  );
};

export default MobileNumberScreen;
