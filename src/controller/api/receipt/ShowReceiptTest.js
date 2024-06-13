import React, { useState } from 'react';
import ShowReceipt from './ShowReceipt';

function ShowReceiptTest() {
  const [receiptData, setReceiptData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchReceipt = async () => {
    const response = await ShowReceipt();
    if (response.error) {
      setError(response.error);
      setReceiptData(null);
    } else {
      setError(null);
      setReceiptData(response.data);
    }
  };

  return (
    <div className="ShowReceiptTest">
      <h1>Show Latest Receipt</h1>
      <button onClick={handleFetchReceipt}>Fetch Latest Receipt</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {receiptData && (
        <div>
          <h2>Latest Receipt Data</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(receiptData, null, 2)}</pre>
          <ul>
            {Object.entries(receiptData).map(([key, value]) => (
              key !== 'total_price' ? (
                <li key={key}>
                  {key}: Quantity: {value.quantity}, Price: {value.price}
                </li>
              ) : (
                <li key={key}>
                  Total Price: {value}
                </li>
              )
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShowReceiptTest;
