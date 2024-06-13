import React from 'react';
import './NutrientAnalysisPage.css';
import '../global.css';
import { useNavigate } from "react-router-dom";
import PeopleCounter from '../component/NutrientAnalysisPageComponent/PeopleCounter';
import Nutrients from '../component/NutrientAnalysisPageComponent/Nutrients';
import ActionButtons from '../component/NutrientAnalysisPageComponent/ActionButtons';

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
        <PeopleCounter />
        <Nutrients />
        <ActionButtons 
          handleClick={handleClick} 
          handleBackClick={handleBackClick} 
        />
      </div>
    </div>
  );
};

export default NutrientAnalysisPage;