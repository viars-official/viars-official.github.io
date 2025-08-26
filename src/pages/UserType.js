import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/UserType.css'; 
import backgroundImg1 from "../assets/images/usertype.png";
import PrimaryButton from "../components/PrimaryButton";

function UserType() {
  const navigate = useNavigate();

  const handleClick = () => {
    // PrimaryButton 시간을 고려해 액션 끝난 뒤 이동
    setTimeout(() => {
      navigate("/aptStart");
    }, 900); //  0.9초
  };

  return (
    <div className="background">
        <div className="textbox1">
          <p className="title2">반가워요!</p>
          <p className="text1">viars에는 다양한 아트웍이 있어요!</p>
          <p className="text1"> 둘러보거나 구매하고 싶으신가요?</p>
        </div>

        <div className="LandingButton">
          <PrimaryButton
            text="네, 감상과 구매를 원해요" 
            onClick={handleClick} 
          />    
        </div>
    
        <img
            className="usertypeImg1"
            alt="backgroundImg1"
            src={backgroundImg1}
        />    
    </div>
  );
}

export default UserType;
