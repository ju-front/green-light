import React from "react";
import './WelcomePage.css'
import '../global.css'
import {MarginVertical} from "../component";
import {useNavigate} from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const navigateAllergySelectPage = () => {
    navigate("/allergy-select");
  }
  return(
    <div className="container">
      <div className="sub-container">
        <MarginVertical value={170} />
        <div className="sub-title">혁신적인 주문의 시작</div>
        <div className="title">G-Order</div>
        <MarginVertical value={100} />
        <div style={{display: "flex", justifyContent: "center"}}>
          <div className="start-button" onClick={navigateAllergySelectPage}>시작하기</div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage;
