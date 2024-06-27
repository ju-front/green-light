import React from "react";
import "./PointStatus.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomComponent/CustomButtons";

const PointStatus = ({ username, userPoint }) => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
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
