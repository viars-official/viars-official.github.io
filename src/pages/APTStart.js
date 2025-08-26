import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/APTStart.css'; 
import PrimaryButtonOutlined from "../components/PrimaryButtonOuntlined"; 
import PrimaryButton from "../components/PrimaryButton"; 
import backgroundImg1 from "../assets/images/usertype.png";

function APTStart() {
  const navigate = useNavigate();

  const handleClick = () => {
    // PrimaryButton 시간을 고려해 액션 끝난 뒤 이동
    setTimeout(() => {
      navigate("/apt-ongoing");
    }, 900); // 0.9초
  };

  return (
    <div className="background">
      <div className="textbox1">
        <p className="subtitle2">혹시 원하는 작품을 고르기 막막하신가요?</p>
        <p className="subtitle2">당신의 취향에 가까운 전시와 작가님을<br/>추천해드려요! </p>
        <p className="title3">ART PERSONALITY TEST</p>
        <p className="subtitle2">시작 해볼까요?</p>
      </div>

        <div className="buttonbox1">
            <div className="Button1">
                <PrimaryButton
                    text="네, 테스트를 시작해요" 
                    onClick={handleClick} 
                />    
            </div>

            <div className="Button2">
                <PrimaryButtonOutlined
                text="아니요, viars를 시작해요" 
                onClick={handleClick} 
                />    
            </div>  
        </div>

    </div>
  );
}

export default APTStart;
