import React, { useState } from 'react';
import ShowReceipt from './ShowReceipt';

const ShowReceiptTest = () => {
  const [receiptID, setReceiptID] = useState('');
  const [response, setResponse] = useState(null);

  const handleFetchReceipt = async () => {
    const result = await ShowReceipt(receiptID);
    setResponse(result);
  };

  return (
    <div>
      <h1>Show Receipt Test</h1>
      <input
        type="text"
        placeholder="Enter Receipt ID"
        value={receiptID}
        onChange={(e) => setReceiptID(e.target.value)}
      />
      <button onClick={handleFetchReceipt}>Fetch Receipt</button>
      {response && (
        <div>
          <h3>Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ShowReceiptTest;
