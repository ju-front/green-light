import React from "react";
import "./PointStatus.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButtons";

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
        fontSize='20px'
        color='green'
        size={{ width: "150px", height: "50px" }}
        onClick={handleHomeClick}
      />
    </div>
  );
};

export default PointStatus;
