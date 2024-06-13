import React from 'react';
import './AllergyButtons.css';

const AllergyButtons = ({ selectedAllergies, handleAllergyToggle, isSelected }) => {
  const allergies = [
    "난류", "우유", "곡류",
    "갑각류", "견과류", "생선류",
    "과일", "연체류", "육류"
  ];

  return (
    <div className="allergy-button-container">
      {allergies.map((allergy, index) => (
        <div 
          key={index}
          className={`allergy-button ${isSelected(allergy) ? "selected" : ""}`} 
          onClick={() => handleAllergyToggle(allergy)}
        >
          {allergy}
        </div>
      ))}
    </div>
  );
};

export default AllergyButtons;