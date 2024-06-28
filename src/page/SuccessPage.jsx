import React, { useState, useEffect } from "react";
import "./SuccessPage.css";
import "../global.css";
import SuccessMessage from "../component/SuccessPageComponent/SuccessMessage";
import StatusDisplay from "../component/SuccessPageComponent/StatusDisplay";
import ActionButtons from "../component/SuccessPageComponent/ActionButtons";
import Receipt from "../component/SuccessPageComponent/Receipt";
import PointStatus from "../component/SuccessPageComponent/PointStatus";
import { useGlobalData } from "../context/DataContext";
import ShowReceipt from "../controller/api/receipt/ShowReceipt";

const SuccessPage = () => {
  const { username, receiptID, setUsername } = useGlobalData();
  const [showPointStatus, setShowPointStatus] = useState(false);
  const [order, setOrder] = useState({
    receipt: {},
    total_price: 0,
    created_at: "",
  });

  useEffect(() => {
    const fetchOrder = async () => {
      const orderData = await ShowReceipt(receiptID);
      setOrder(orderData || { receipt: {}, total_price: 0, created_at: "" });
    };

    fetchOrder();
  }, [receiptID]);

  let userPoint = 13;

  useEffect(() => {
    if (username) {
      setShowPointStatus(true);
    } else {
      setShowPointStatus(false);
    }
  }, [username]);

  const handleArrowClick = () => {
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
