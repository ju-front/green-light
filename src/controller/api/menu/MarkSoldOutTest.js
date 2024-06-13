import React, { useState } from 'react';
import MarkSoldOut from './MarkSoldOut';

function MarkSoldOutTest() {
  const [soldOutItems, setSoldOutItems] = useState([]);

  const handleMarkSoldOut = async () => {
    const response = await MarkSoldOut();
    if (response.error) {
      console.error('Error:', response.error);
    } else {
      setSoldOutItems(response.soldOutIngredients);
    }
  };

  return (
    <div>
      <button onClick={handleMarkSoldOut}>Check Sold Out Items</button>
      <ul>
        {soldOutItems.map(item => (
          <li key={item.id}>{item.menu_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MarkSoldOutTest;
