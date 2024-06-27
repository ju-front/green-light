import React from 'react';
import CreateReceipt from './CreateReceipt';

function CreateReceiptTest() {
  const handleOrder = async () => {
    const order = {
      items: {
        focaccia: 2,
        gelato: 1,
        panna_cotta: 3,
        bruschetta: 3
      },
      total_price: 16000
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
