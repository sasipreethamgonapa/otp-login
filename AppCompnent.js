import React, { useState } from "react";
import MobileNumberScreen from "./MobileNumberScreen";
import OTPVerificationScreen from "./OTPVerificationScreen";

const App = () => {
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const navigateToVerification = () => {
    setIsOtpVerified(false);
  };

  const verifyOtp = (isVerified) => {
    setIsOtpVerified(isVerified);
  };

  return (
    <div>
      {isOtpVerified ? (
        <div>
          <h2>Success Screen (Screen-3)</h2>
          <p>OTP Verified Successfully!</p>
        </div>
      ) : (
        <div>
          <MobileNumberScreen
            setOtp={setOtp}
            navigateToVerification={navigateToVerification}
          />
          <OTPVerificationScreen otp={otp} verifyOtp={verifyOtp} />
        </div>
      )}
    </div>
  );
};

export default App;
