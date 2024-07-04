import React, { useEffect } from "react";
import "./PointStatus.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomComponent/CustomButtons";
import { useGlobalData } from "../../context/DataContext";

const PointStatus = ({ username, userPoint }) => {
  const navigate = useNavigate();
  const { setUsername, setAllergyData, setReceiptID, setOrderData } =
    useGlobalData();

  useEffect(() => {
    console.log("PointStatus component loaded");
    console.log("Username:", username);
    console.log("UserPoint:", userPoint);
  }, [username, userPoint]);

  const handleHomeClick = () => {
    // DataContext 초기화 로직
    console.log("Resetting DataContext");
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

  return (
    <div className='point-status'>
      <h1>
        {username}님의 적립 현황 {userPoint}/50
      </h1>
      <CustomButton
        text='처음으로'
        fontSize='large'
        color='green'
        onClick={handleHomeClick}
      />
    </div>
  );
};

export default PointStatus;
