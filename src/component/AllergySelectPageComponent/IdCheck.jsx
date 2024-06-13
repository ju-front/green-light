import React from 'react';
import './IdCheck.css';

const IdCheck = ({ inputValue, setInputValue }) => {
  return (
    <div className="idCheck">아이디가 있다면?
      <span className="idCheck-box">
        <input
          className="id-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="아이디를 입력해주세요."
        />
        <button className="login-button">로그인</button>
      </span>
    </div>
  );
};

export default IdCheck;