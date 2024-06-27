import React from 'react';
import './NavigationButtons.css';

const NavigationButtons = ({ handleInitialClick, handleClick }) => {
  return (
    <>
      <div className="initial-button-container">
        <div className="initial-button" onClick={handleInitialClick}>처음으로</div>
      </div>
      <div className="selectCompletion-button-container">
        <div className="selectCompletion-button" onClick={handleClick}>선택 완료</div>
      </div>
    </>
  );
};

export default NavigationButtons;