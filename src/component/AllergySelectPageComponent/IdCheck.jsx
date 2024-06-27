import React, { useState } from 'react';
import './IdCheck.css';
import SignInComponent from './SignInComponent';
import CustomAlert from '../CustomComponent/CustomAlert';

const IdCheck = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleLoginClick = () => {
    setShowAlert(true);
  };

  return (
    <div className="idCheckComponent">
      <SignInComponent onLoginClick={handleLoginClick} />
      {showAlert && <CustomAlert message="로그인 되었습니다." duration={3000} />}
    </div>
  );
};

export default IdCheck;