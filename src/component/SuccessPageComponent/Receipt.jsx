import React from "react";
import "./Receipt.css";

const Receipt = ({ order }) => {
  return (
    <div className='receipt'>
      <h2>주문 영수증</h2>
      <div className='receipt-header'>
        <span>재형이네 순두부</span>
        <span>{order.date}</span>
      </div>
      <div className='receipt-body'>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{item.price * item.quantity} 원</span>
            </li>
          ))}
        </ul>
        <div className='receipt-total'>
          <span>총합:</span>
          <span>{order.total} 원</span>
        </div>
      </div>
      <div className='receipt-footer'>
        <p>이용해주셔서 감사합니다!</p>
      </div>
    </div>
  );
};

export default Receipt;
