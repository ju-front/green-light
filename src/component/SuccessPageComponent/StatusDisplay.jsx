import React from "react";
import "./StatusDisplay.css";

const StatusDisplay = ({ setUsername, handleArrowClick }) => {
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className='status-display'>
      <p className='status-text'>알레르기 정보 / 스탬프 적립을 하고 싶다면?</p>
      <div className='input-container'>
        <input type='text' onChange={handleChange} />
        <button className='next-button' onClick={handleArrowClick}>
          <span className='arrow-icon'>→</span>
        </button>
      </div>
    </div>
  );
};

export default StatusDisplay;
