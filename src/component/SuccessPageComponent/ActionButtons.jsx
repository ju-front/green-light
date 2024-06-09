import React from "react";
import "./ActionButtons.css";
import { useNavigate } from "react-router-dom";

const ActionButtons = () => {
  const navigate = useNavigate();
  const ActionButtonsClickCancel = () => {
    navigate("/");
  };
  const ActionButtonsClickJoin = () => {
    //StatusDiplay에서 입력한 이름을 받아와서 검증하는 로직이 필요
    //검증이 완료되면 아래 코드 실행
    //회원가입이 완료되었다는 메시지를 띄우고 이름 다시 입력 후
    //화살표 버튼을 누르면 PointStatus로 넘어가는 로직이 필요
  };

  return (
    <div>
      <button className='cancel-button' onClick={ActionButtonsClickCancel}>
        건너뛰기
      </button>
      <button className='confirm-button' onClick={ActionButtonsClickJoin}>
        회원가입
      </button>
    </div>
  );
};

export default ActionButtons;
