import React from "react";
import PropTypes from "prop-types";
import "./Receipt.css";

const Receipt = ({ order }) => {
  // order 객체의 receipt 데이터를 items 배열로 변환
  const items = order.receipt
    ? Object.keys(order.receipt).map((key) => ({
        name: key,
        quantity: order.receipt[key].quantity,
        price: order.receipt[key].price,
      }))
    : [];

  return (
    <div className='receipt'>
      <h2>주문 영수증</h2>
      <div className='receipt-header'>
        <span>재형이네 순두부</span>
        <span>{order.created_at}</span>
      </div>
      <div className='receipt-body'>
        <ul>
          {items.length > 0 ? (
            items.map((item, index) => (
              <li key={index}>
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>{item.price * item.quantity} 원</span>
              </li>
            ))
          ) : (
            <div>주문 내역이 없습니다.</div>
          )}
        </ul>
        <div className='receipt-total'>
          <span>총합:</span>
          <span>{order.total_price} 원</span>
        </div>
      </div>
      <div className='receipt-footer'>
        <p>이용해주셔서 감사합니다!</p>
      </div>
    </div>
  );
};

Receipt.propTypes = {
  order: PropTypes.shape({
    receipt: PropTypes.objectOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ),
    total_price: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default Receipt;
