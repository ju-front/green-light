import React, { useState } from "react";
import "./StatusDisplay.css";
import CustomTextField from "../CustomTextField";

const StatusDisplay = ({ setUsername, handleArrowClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setUsername(event.target.value);
  };

  return (
    <div className='status-display'>
      <p className='status-text'>알레르기 정보 / 스탬프 적립을 하고 싶다면?</p>
      <div className='input-container'>
        <CustomTextField
          value={inputValue}
          onChange={handleChange}
          size='large'
          backgroundColor='gray'
          fontColor='white'
        />
        <button className='next-button' onClick={handleArrowClick}>
          <span className='arrow-icon'>→</span>
        </button>
      </div>
    </div>
  );
};

export default StatusDisplay;
