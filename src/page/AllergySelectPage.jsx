import React, { useState } from "react";
import './AllergySelectPage.css';
import '../global.css';
import { useNavigate } from "react-router-dom";
import IdCheck from "../component/AllergySelectPageComponent/IdCheck";
import AllergyButtons from "../component/AllergySelectPageComponent/AllergyButtons";
import NavigationButtons from "../component/AllergySelectPageComponent/NavigationButtons";

const AllergySelectPage = () => {
  const navigate = useNavigate();
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInitialClick = () => {
    navigate("/");
  }

  const handleClick = () => {
    navigate("/order");
  }

  const handleAllergyToggle = (allergy) => {
    if (selectedAllergies.includes(allergy)) {
      setSelectedAllergies(selectedAllergies.filter(a => a !== allergy));
    } else {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  }

  const isSelected = (allergy) => selectedAllergies.includes(allergy);

  return (
    <div className="container">
      <div className="sub-container">
        <div className="header-text">알레르기가 있으신가요?</div>
        <IdCheck 
          inputValue={inputValue} 
          setInputValue={setInputValue} 
        />
        <AllergyButtons 
          selectedAllergies={selectedAllergies} 
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