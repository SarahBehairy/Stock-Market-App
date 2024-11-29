import React from "react";
import "./SplashScreen.css";
import nasdaqLogo from "@assets/images/nasdaq-logo-light.svg";


const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen" aria-label="splash-screen">
      <div className="splash-logo" aria-label="splash-logo">
        <img src={nasdaqLogo} alt="Nasdaq Logo" width="300px"/>
      </div>
      <div className="splash-name">Sarah Hanafy</div>
    </div>
  );
};

export default SplashScreen;