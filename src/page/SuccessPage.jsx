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
import ReceiptSignIn from "../controller/api/auth/ReceiptSignIn";

const SuccessPage = () => {
  const { username, receiptID, setUsername, allergyData } = useGlobalData();
  const [showPointStatus, setShowPointStatus] = useState(false);
  const [order, setOrder] = useState({
    receipt: {},
    total_price: 0,
    created_at: "",
  });
  const [userPoint, setUserPoint] = useState(0); // userPoint 상태 추가
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const receiptData = await ShowReceipt(receiptID.receiptID);
        console.log("Receipt data fetched successfully:", receiptData);
        setOrder(
          receiptData.data || { receipt: {}, total_price: 0, created_at: "" }
        );
      } catch (error) {
        console.error("Error fetching receipt data:", error);
        setError("An error occurred while fetching receipt data");
      }
    };
    if (receiptID?.receiptID) {
      fetchOrder();
    }
  }, [receiptID]);

  useEffect(() => {
    const fetchUserPoint = async () => {
      try {
        const response = await ReceiptSignIn(
          username,
          allergyData,
          receiptID.receiptID
        );
        if (response.error) {
          setError(response.error);
        } else {
          console.log("ReceiptSignIn response:", response);
          setUserPoint(response.coupon);
          setShowPointStatus(true); // userPoint를 설정한 후에 showPointStatus를 true로 설정
        }
      } catch (error) {
        console.error("Error fetching user point:", error);
        setError("An error occurred while fetching user point");
      }
    };

    if (username) {
      fetchUserPoint();
    }
  }, [username, allergyData, receiptID]);

  useEffect(() => {
    console.log("username:", username);
    console.log("userPoint:", userPoint);
    console.log("error:", error);
  }, [username, userPoint, error]);

  const handleArrowClick = () => {
    if (!error) {
      setShowPointStatus(true);
    }
  };

  return (
    <>
      {showPointStatus ? (
        <div className='container'>
          <div className='sub-container'>
            <div className='content'>
              <SuccessMessage />
              <Receipt order={order} />
              <PointStatus username={username} userPoint={userPoint} />
            </div>
          </div>
        </div>
      ) : (
        <div className='container'>
          <div className='sub-container'>
            <div className='content'>
              <SuccessMessage />
              <Receipt order={order} />
              <StatusDisplay
                setUsername={setUsername}
                handleArrowClick={handleArrowClick}
                setUserPoint={setUserPoint}
              />
              <ActionButtons />
              {error && <p className='error-text'>{error}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessPage;
