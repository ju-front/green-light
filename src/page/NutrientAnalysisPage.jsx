import React, {useEffect, useState} from 'react';
import './NutrientAnalysisPage.css';
import '../global.css';
import {useNavigate} from "react-router-dom";
import PeopleCounter from '../component/NutrientAnalysisPageComponent/PeopleCounter';
import Nutrients from '../component/NutrientAnalysisPageComponent/Nutrients';
import ActionButtons from '../component/NutrientAnalysisPageComponent/ActionButtons';
import CalculateNutrition from "../controller/api/menu/CalculateNutrition";
import {useGlobalData} from "../context/DataContext";

const NutrientAnalysisPage = () => {
  const navigate = useNavigate();
  const [nutrientData, setNutrientData] = useState({});
  const {orderData, setOrderData} = useGlobalData();

  useEffect(() => {
    CalculateNutrition(orderData.items)
      .then((data)=>{
        setNutrientData(data);
        setOrderData({ items: {}, total_price: 0 });
      })
      .catch(()=>console.log("fetch error"));
  }, []);

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
        <Nutrients nutrientsData={nutrientData} />
        <ActionButtons
          handleClick={handleClick}
          handleBackClick={handleBackClick}
        />
      </div>
    </div>
  );
};

export default NutrientAnalysisPage;
