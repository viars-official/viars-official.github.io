// src/components/PrimaryButton.jsx
import React, { useState } from "react";
import '../styles/PrimaryButtonFilled.css';

function PrimaryButton({ text, onClick, disabled = false }) {
  const [clicked, setClicked] = useState(false);
  const [activated, setActivated] = useState(false);

  const handleClick = () => {
    if (disabled) return;

    // 클릭 시 hover 느낌
    setClicked(true);

    if (onClick) onClick();

    // 0.5초 후 activated 상태로 전환
    setTimeout(() => {
      setClicked(false);
      setActivated(true);
    }, 500);
  };

  let className = "primaryFilled";
  if (disabled) className += " disabled";
  else if (clicked) className += " clicked";
  else if (activated) className += " activated";

  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default PrimaryButton;
