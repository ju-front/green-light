import React, { useState } from "react";
import "./ActionButtons.css";
import CustomButton from "../CustomComponent/CustomButtons";
import CustomAlert from "../CustomComponent/CustomAlert"; // CustomAlert import 추가
import { useNavigate } from "react-router-dom";

const ActionButtons = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const ActionButtonsClickCancel = () => {
    navigate("/");
  };

  const ActionButtonsClickJoin = () => {
    // StatusDisplay에서 입력한 이름을 받아와서 검증하는 로직이 필요
    // 검증이 완료되면 아래 코드 실행

    // 화살표 버튼을 누르면 PointStatus로 넘어가는 로직이 필요

    // 회원가입이 완료되었다는 메시지를 띄우고 이름 다시 입력 후
    // 테스트용으로 CustomAlert를 3초 동안 표시
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
        <CustomAlert message='회원가입되셨습니다' duration={3000} />
      )}
    </div>
  );
};

export default ActionButtons;
