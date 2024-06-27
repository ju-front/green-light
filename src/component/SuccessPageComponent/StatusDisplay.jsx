import React, { useState } from "react";
import "./StatusDisplay.css";
import CustomTextField from "../CustomComponent/CustomTextField";

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
          size='medium'
          backgroundColor='transparent'
          fontColor='white'
          placeholder='ID를 입력해주세요'
        />
        <button className='loginButton' onClick={handleArrowClick}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default StatusDisplay;
