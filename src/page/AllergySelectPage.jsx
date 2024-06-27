import React, { useEffect, useState } from "react";
import './AllergySelectPage.css';
import '../global.css';
import { useNavigate } from "react-router-dom";
import IdCheck from "../component/AllergySelectPageComponent/IdCheck";
import AllergyButtons from "../component/AllergySelectPageComponent/AllergyButtons";
import NavigationButtons from "../component/AllergySelectPageComponent/NavigationButtons";
import { useGlobalData } from "../context/DataContext"; // Adjust the import path as necessary

const AllergySelectPage = () => {
  const navigate = useNavigate();
  const { allergyData, setAllergyData } = useGlobalData();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(allergyData);
  }, [allergyData]);

  const handleInitialClick = () => {
    navigate("/");
  }

  const handleClick = () => {
    navigate("/order");
  }

  const handleAllergyToggle = (allergy) => {
    setAllergyData(prevAllergyData => ({
      ...prevAllergyData,
      [allergy]: !prevAllergyData[allergy]
    }));
  }

  const isSelected = (allergy) => allergyData[allergy];

  return (
    <div className="container">
      <div className="sub-container">
        <div className="header-text">알레르기가 있으신가요?</div>
        <IdCheck 
          inputValue={inputValue} 
          setInputValue={setInputValue} 
        />
        <AllergyButtons 
          selectedAllergies={Object.keys(allergyData).filter(allergy => allergyData[allergy])} 
          handleAllergyToggle={handleAllergyToggle} 
          isSelected={isSelected} 
        />
        <NavigationButtons 
          handleInitialClick={handleInitialClick} 
          handleClick={handleClick} 
        />
      </div>
    </div>
  )
}

export default AllergySelectPage;
