import React, { useState } from "react";
import './AllergySelectPage.css'
import '../global.css'
import { useNavigate } from "react-router-dom";

const AllergySelectPage = () => {
  const navigate = useNavigate();
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleIniticalClick = () => {
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
        <div className="idCheck">아이디가 있다면?
          <span className="idCheck-box">
            <input
              className="id-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="prince5390"
            />
            <button className="login-button">로그인</button>
          </span>
        </div>
        <div className="allergy-button-container">
          <div className="allergy-row">
            <div 
              className={`allergy-button ${isSelected("난류") ? "selected" : ""}`} 
              onClick={() => handleAllergyToggle("난류")}
            >
              난류
            </div>
            <div 
              className={`allergy-button ${isSelected("우유") ? "selected" : ""}`} 
              onClick={() => handleAllergyToggle("우유")}
            >
              우유
            </div>
            <div 
              className={`allergy-button ${isSelected("곡류") ? "selected" : ""}`} 
              onClick={() => handleAllergyToggle("곡류")}
            >
              곡류
            </div>
          </div>
          <div className="allergy-row">
            <div 
              className={`allergy-button ${isSelected("갑각류") ? "selected" : ""}`} 
              onClick={() => handleAllergyToggle("갑각류")}
            >
              갑각류
            </div>
            <div 
              className={`allergy-button ${isSelected("견과류") ? "selected" : ""}`} 
              onClick={() => handleAllergyToggle("견과류")}
            >
              견과류
            </div>
            <div 
              className={`allergy-button ${isSelected("생선류") ? "selected" : ""}`} 
              onClick={() => handleAllergyToggle("생선류")}
            >
              생선류
            </div>
          </div>
          <div className="allergy-row">
            <div 
              className={`allergy-button ${isSelected("과일") ? "selected" : ""}`} 
              onClick={() => handleAllergyToggle("과일")}
            >
              과일
            </div>
            <div 
              className={`allergy-button ${isSelected("연체류") ? "selected" : ""}`} 
              onClick={() => handleAllergyToggle("연체류")}
            >
              연체류
            </div>
            <div 
              className={`allergy-button ${isSelected("육류") ? "selected" : ""}`} 
              onClick={() => handleAllergyToggle("육류")}
            >
              육류
            </div>
          </div>
        </div>
        <div className="initial-button-container">
          <div className="initial-button" onClick={handleIniticalClick}>처음으로</div>
        </div>
        <div className="selectCompletion-button-container">
          <div className="selectCompletion-button" onClick={handleClick}>선택 완료</div>
        </div>
      </div>
    </div>
  )
}

export default AllergySelectPage;