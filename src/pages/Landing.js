// src/pages/Landing.js
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import '../styles/Landing.css'; 
import '../styles/Global.css'; 
import landingImg1 from "../assets/images/landing.png";


function Landing() {

  const navigate = useNavigate(); // navigate 함수 생성

  // 클릭 핸들러
  const handleClick = () => {
    navigate("/usertype"); // /usertype 페이지로 이동
  };

  return (
    <div className="background" onClick={handleClick}>
      <img className="landingImg1"
        alt="Landing"
        src={landingImg1}
      />    
    </div>
  );
}

export default Landing;