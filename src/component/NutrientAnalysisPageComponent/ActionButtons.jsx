import React from 'react';
import './ActionButtons.css';

const ActionButtons = ({ handleClick, handleBackClick }) => {
  return (
    <>
      <div className="order-info">
        <div className="confirm-button" onClick={handleClick}>주문 확정</div>
      </div>
      <div className="back-button-container">
        <div className="back-button" onClick={handleBackClick}>이전 화면</div>
      </div>
    </>
  );
};

export default ActionButtons;