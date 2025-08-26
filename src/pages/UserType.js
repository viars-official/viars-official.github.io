import React from "react";
import '../styles/UserType.css'; 
import '../styles/Global.css'; 
import backgroundImg1 from "../assets/images/usertype.png";

function UserType() {
  return (
    <div className="background">
        <button className="myButton">버튼</button>
        <img
            className="usertypeImg1"
            alt="backgroundImg1"
            src={backgroundImg1}
        />    
    </div>
  );
}

export default UserType;
