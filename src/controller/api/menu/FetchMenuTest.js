import React, { useEffect, useState } from 'react';
import FetchMenu from './FetchMenu';

const FetchMenuTest = () => {
  const [menuData, setMenuData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allergyData = {
        gluten: true,
        dairy: false,
        egg: true,
        shellfish: false,
        nut: true,
        soy: false,
        fish: true,
        celery: false,
        mustard: true
      };

      const response = await FetchMenu(allergyData);

      if (response.error) {
        setError(response.error);
      } else {
        setMenuData(response.data);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!menuData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetch Menu Test</h1>
      <h2>Top 3 Menus</h2>
      <ul>
        {menuData.top3.map((menu, index) => (
          <li key={index}>
            <strong>{menu.name}</strong>: {menu.price} - <img src={menu.img} alt={menu.name} />
          </li>
        ))}
      </ul>
      <h2>Appetizers</h2>
      <ul>
        {menuData.appetizer.map((menu, index) => (
          <li key={index}>
            <strong>{menu.name}</strong>: {menu.price} - <img src={menu.img} alt={menu.name} />
          </li>
        ))}
      </ul>
      <h2>Main Dishes</h2>
      <ul>
        {menuData.main_dish.map((menu, index) => (
          <li key={index}>
            <strong>{menu.name}</strong>: {menu.price} - <img src={menu.img} alt={menu.name} />
          </li>
        ))}
      </ul>
      <h2>Desserts</h2>
      <ul>
        {menuData.dessert.map((menu, index) => (
          <li key={index}>
            <strong>{menu.name}</strong>: {menu.price} - <img src={menu.img} alt={menu.name} />
          </li>
        ))}
      </ul>
      <h2>Sold Out Menus</h2>
      <ul>
        {menuData.soldOut_menu.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul>
      <h2>Allergy Menus</h2>
      <ul>
        {menuData.allergy_menu.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchMenuTest;
