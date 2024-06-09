import React from "react";
import './WelcomePage.css'
import '../global.css'
import {MarginVertical} from "../component";
import {useNavigate} from "react-router-dom";
import {useGlobalData} from "../context/DataContext";

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/allergy-select");
  }
  // 3. 다음과 같이 변수 및 함수를 전역적으로 사용 가능합니다.
  // 여기서 수정된 변수는 모든 페이지에서 동일하게 변경됩니다.
  const { username, setUsername } = useGlobalData();
  return(
    <div className="container">
      <div className="sub-container">
        <MarginVertical value={170} />
        <div className="sub-title">혁신적인 주문의 시작</div>
        <div className="title">G-Order</div>
        <MarginVertical value={100} />
        <div style={{display: "flex", justifyContent: "center"}}>
          <div className="start-button" onClick={handleClick}>시작하기</div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage;
