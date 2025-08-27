// src/pages/Landing.js
import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Global.css'; 
import '../styles/Landing.css'; 
import landingImg1 from "../assets/images/landing.png";

function Landing() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/usertype");
  };

  return (
    <div className="background" onClick={handleClick}>
      <div className="landing-wrapper">
        <img className="landingImg1" alt="Landing" src={landingImg1} />
      </div>
    </div>
  );
}

export default Landing;
