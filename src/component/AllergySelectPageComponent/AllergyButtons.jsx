import React from 'react';
import './AllergyButtons.css';

const AllergyButtons = ({ selectedAllergies, handleAllergyToggle, isSelected }) => {
  const allergies = [
    "gluten", "dairy", "egg",
    "shellfish", "nut", "soy",
    "fish", "celery", "mustard"
  ];

  const allergyNames = {
    "gluten": "곡류",
    "dairy": "우유",
    "egg": "난류",
    "shellfish": "갑각류",
    "nut": "견과류",
    "soy": "연체류",
    "fish": "생선류",
    "celery": "과일",
    "mustard": "육류"
  };

  return (
    <div className="allergy-button-container">
      {allergies.map((allergy, index) => (
        <div 
          key={index}
          className={`allergy-button ${isSelected(allergy) ? "selected" : ""}`} 
          onClick={() => handleAllergyToggle(allergy)}
        >
          {allergyNames[allergy]}
        </div>
      ))}
    </div>
  );
};

export default AllergyButtons;