import React, { useState } from "react";
import "./SuccessPage.css";
import "../global.css";
import SuccessMessage from "../component/SuccessPageComponent/SuccessMessage";
import StatusDisplay from "../component/SuccessPageComponent/StatusDisplay";
import ActionButtons from "../component/SuccessPageComponent/ActionButtons";
import Receipt from "../component/SuccessPageComponent/Receipt";
import PointStatus from "../component/SuccessPageComponent/PointStatus";

const SuccessPage = () => {
  const [showPointStatus, setShowPointStatus] = useState(false);
  const [username, setUsername] = useState("");

  const order = {
    // 임시 order data
    date: "2024-06-08-14:30",
    items: [
      { name: "메뉴1", quantity: 2, price: 5000 },
      { name: "메뉴2", quantity: 1, price: 7000 },
      { name: "메뉴3", quantity: 3, price: 3000 },
    ],
    total: 26000,

    // 페이지 접근 시 비동기로 supabase order data를 받아오는 로직 추가 필요
  };
  // 임시 user point data 이것도 supabase로 받아와야 함
  let userPoint = 13;

  const handleArrowClick = () => {
    //로그인 시 변경 필요
    setShowPointStatus(true);
  };

  if (showPointStatus) {
    return (
      <div className='container'>
        <div className='sub-container'>
          <div className='content'>
            <SuccessMessage />
            <Receipt order={order} />
            <PointStatus username={username} userPoint={userPoint} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='sub-container'>
        <div className='content'>
          <SuccessMessage />
          <Receipt order={order} />
          <StatusDisplay
            setUsername={setUsername}
            handleArrowClick={handleArrowClick}
          />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
