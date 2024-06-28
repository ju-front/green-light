import React, { useState } from "react";
import "./StatusDisplay.css";
import CustomTextField from "../CustomComponent/CustomTextField";
import ReceiptSignIn from "../../controller/api/auth/ReceiptSignIn";
import { useGlobalData } from "../../context/DataContext";

const StatusDisplay = ({ handleArrowClick, setUserPoint }) => {
  const [inputValue, setInputValue] = useState("");
  const { setUsername, setAllergyData, receiptID, allergyData } =
    useGlobalData();
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleLoginClick = async () => {
    setError(""); // 로그인 시도 전 에러 상태 초기화
    const response = await ReceiptSignIn(
      inputValue,
      allergyData,
      receiptID.receiptID
    );
    console.log("ReceiptSignIn response:", response); // 로그 추가
    if (response.error) {
      setError(response.error);
    } else {
      setUsername(inputValue);
      setAllergyData(response);
      console.log("Setting userPoint to:", response.coupon); // 로그 추가
      setUserPoint(response.coupon); // userPoint 설정
      handleArrowClick();
    }
  };

  return (
    <div className='status-display'>
      <p className='status-text'>알레르기 정보 / 스탬프 적립을 하고 싶다면?</p>
      <div className='input-container'>
        <CustomTextField
          value={inputValue}
          onChange={handleChange}
          size='medium'
          backgroundColor='transparent'
          fontColor='white'
          placeholder='ID를 입력해주세요'
        />
        <button className='loginButton' onClick={handleLoginClick}>
          로그인
        </button>
      </div>
      {error && <p className='error-text'>{error}</p>}
    </div>
  );
};

export default StatusDisplay;
