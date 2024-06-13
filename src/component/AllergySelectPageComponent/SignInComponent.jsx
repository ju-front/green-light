import React, { useState } from 'react';
import './SignInComponent.css';
import CustomTextField from '../CustomComponent/CustomTextField';

const SignInComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="signInComponent">
      <div className="signInBox">
        <CustomTextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          size="medium"
          backgroundColor="transparent"
          fontColor="white"
          fontSize="15px"
          placeholder="아이디를 입력해주세요."
        />
        <button className="loginButton">로그인</button>
      </div>
    </div>
  );
};

export default SignInComponent;