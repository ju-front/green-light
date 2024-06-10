import React from "react";
import "./PointStatus.css";
import { useNavigate } from "react-router-dom";

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
      <button className='home-button' onClick={handleHomeClick}>
        처음으로
      </button>
    </div>
  );
};

export default PointStatus;
