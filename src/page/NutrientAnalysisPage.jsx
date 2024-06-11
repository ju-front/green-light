import React from 'react';
import './NutrientAnalysisPage.css';
import '../global.css';
import {useNavigate} from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NutrientAnalysisPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/success");
  }

  const handleBackClick = () => {
    navigate("/order");
  }

  return (
    <div className="container">
      <div className="sub-container">
        <div className="header-text">영양성분 확인해 보실래요?</div>
        <div className="people-count">몇명이서 드시나요?
          <span className="people-count-controls">
            <button className="minus-button">-</button>
            <span className="people-count-text">4명</span>
            <button className="plus-button">+</button>
          </span>
        </div>
        <div className="nutrient-section">
          <div className="nutrient-item">
            <CircularProgressbar 
              value={130} 
              text={`${130}%`}
              styles={buildStyles({
                pathColor: '#FF6B6B',
                textColor: '#FF6B6B',
                trailColor: 'transparent',
                textSize: '32px'
              })}
            />
            <div className="nutrient-label">탄수화물</div>
          </div>
          <div className="nutrient-item">
            <CircularProgressbar 
              value={35} 
              text={`${35}%`}
              styles={buildStyles({
                pathColor: '#4ECCA3',
                textColor: '#4ECCA3',
                trailColor: 'transparent',
                textSize: '32px'
              })}
            />
            <div className="nutrient-label">단백질</div>
          </div>
          <div className="nutrient-item">
            <CircularProgressbar 
              value={68} 
              text={`${68}%`}
              styles={buildStyles({
                pathColor: '#9D8DF1',
                textColor: '#9D8DF1',
                trailColor: 'transparent',
                textSize: '32px'
              })}
            />
            <div className="nutrient-label">지방</div>
          </div>
        </div>
        <div className="additional-info">
          <div className="additional-item">
            <CircularProgressbar 
              value={77} 
              text={`${77}%`}
              styles={buildStyles({
                pathColor: '#FFB74D',
                textColor: '#FFB74D',
                trailColor: 'transparent',
                textSize: '30px'
              })}
            />
            <div className="additional-label">나트륨</div>
          </div>
          <div className="additional-item">
            <CircularProgressbar 
              value={83} 
              text={`${83}%`}
              styles={buildStyles({
                pathColor: '#FF8A65',
                textColor: '#FF8A65',
                trailColor: 'transparent',
                textSize: '30px'
              })}
            />
            <div className="additional-label">콜레스테롤</div>
          </div>
        </div>
        <div className="order-info">
          <div className="confirm-button" onClick={handleClick}>주문 확정</div>
        </div>
        <div className="back-button-container">
          <div className="back-button" onClick={handleBackClick}>이전 화면</div>
        </div>
      </div>
    </div>
  );
};

export default NutrientAnalysisPage;