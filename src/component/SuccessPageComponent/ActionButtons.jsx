import React, { useState } from "react";
import "./ActionButtons.css";
import CustomButton from "../CustomComponent/CustomButtons";
import CustomAlert from "../CustomComponent/CustomAlert";
import { useNavigate } from "react-router-dom";
import { useGlobalData } from "../../context/DataContext";
import SignUp from "../../controller/api/auth/SignUp";

const ActionButtons = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const {
    username,
    allergyData,
    receiptID,
    setUsername,
    setAllergyData,
    setReceiptID,
    setOrderData,
  } = useGlobalData();

  const ActionButtonsClickCancel = () => {
    // DataContext 초기화 로직
    setUsername("");
    setAllergyData({
      gluten: false,
      dairy: false,
      egg: false,
      shellfish: false,
      nut: false,
      soy: false,
      fish: false,
      celery: false,
      mustard: false,
    });
    setReceiptID(null);
    setOrderData({ items: {}, total_price: 0 });

    navigate("/");
  };

  const ActionButtonsClickJoin = async () => {
    try {
      const response = await SignUp(username, allergyData, receiptID.receiptID);
      if (response.error) {
        setAlertMessage(response.error);
      } else {
        setAlertMessage("회원가입되셨습니다");
      }
    } catch (error) {
      setAlertMessage("An error occurred during sign-up");
    }

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // 3초 동안 알림을 표시합니다.
  };

  return (
    <div className='action-buttons'>
      <CustomButton
        text='처음으로'
        size='medium'
        color='red'
        onClick={ActionButtonsClickCancel}
      />
      <CustomButton
        text='회원가입'
        size='medium'
        color='green'
        onClick={ActionButtonsClickJoin}
      />
      {showAlert && (
        <CustomAlert message={alertMessage} duration={3000} fontColor='green' />
      )}
    </div>
  );
};

export default ActionButtons;
