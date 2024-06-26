import React, { useEffect, useState } from 'react';
import ShowReceipt from './ShowReceipt';

const ShowReceiptTest = () => {
  const [receiptData, setReceiptData] = useState(null);
  const [error, setError] = useState(null);
  const id = 16; // 테스트할 id를 설정합니다.

  useEffect(() => {
    const fetchData = async () => {
      const response = await ShowReceipt(id);

      if (response.error) {
        setError(response.error);
      } else {
        setReceiptData(response.data);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!receiptData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Show Receipt Test</h1>
      <h2>Receipt</h2>
      <ul>
        {Object.entries(receiptData.receipt).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}</strong>: {value.quantity} - {value.price}
          </li>
        ))}
      </ul>
      <h2>Total Price</h2>
      <p>{receiptData.total_price}</p>
    </div>
  );
};

export default ShowReceiptTest;
