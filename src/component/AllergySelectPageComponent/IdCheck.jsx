import React, { useState } from "react";
import "./IdCheck.css";
import SignInComponent from "./SignInComponent";
import CustomAlert from "../CustomComponent/CustomAlert";
import SignIn from "../../controller/api/auth/SignIn"; // Adjust the import path as necessary
import { useGlobalData } from "../../context/DataContext"; // Adjust the import path as necessary

const IdCheck = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [userID, setUserID] = useState(null);
  const { setAllergyData } = useGlobalData();

  const handleLoginClick = (userID) => {
    SignIn(userID).then((response) => {
      if (response.error) {
        console.error(response.error);
        setAlertMessage("아이디가 없습니다.");
        setShowAlert(true);
        return;
      }
      setAllergyData(response);
      setUserID(userID); // Set the user ID on successful login
      setAlertMessage("로그인 되었습니다.");
      setShowAlert(true);
    });
  };

  return (
    <div className='idCheckComponent'>
      <SignInComponent onLoginClick={handleLoginClick} userID={userID} />
      {showAlert && <CustomAlert message={alertMessage} duration={3000} />}
    </div>
  );
};

export default IdCheck;
