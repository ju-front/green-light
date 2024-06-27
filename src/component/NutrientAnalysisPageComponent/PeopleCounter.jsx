import React, { useState } from 'react';
import './PeopleCounter.css';

const PeopleCounter = ({setPeopleCount, peopleCount}) => {
  const handleMinus = () => {
    setPeopleCount(prevCount => Math.max(prevCount - 1, 1));
  };

  const handlePlus = () => {
    setPeopleCount(prevCount => prevCount + 1);
  };

  return (
    <div className="people-count">몇명이서 드시나요?
      <span className="people-count-controls">
        <button className="minus-button" onClick={handleMinus}>-</button>
        <span className="people-count-text">{peopleCount}명</span>
        <button className="plus-button" onClick={handlePlus}>+</button>
      </span>
    </div>
  );
};

export default PeopleCounter;