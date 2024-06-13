import React from 'react';
import CreateReceipt from './CreateReceipt';

function CreateReceiptTest() {
  const handleOrder = async () => {
    const order = {
      items: [
        { name: "focaccia", quantity: 2 },
        { name: "gelato", quantity: 1 },
        { name: "panna_cotta", quantity: 3 },
        { name: "bruschetta", quantity: 3 }
      ],
      total: 26000
    };

    const response = await CreateReceipt(order);
    if (response.error) {
      console.error('Error:', response.error);
    } else {
      console.log('Order successfully created:', response.data);
    }
  };

  return (
    <div className="CreateReceiptTest">
      <h1>Order System</h1>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}

export default CreateReceiptTest;
