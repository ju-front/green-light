import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function BackApp() {
  const [menuData, setMenuData] = useState([]);
  const fetchMenuData = async () => {
    const data = await supabase
      .from('MenuTable')
      .select('*');
    setMenuData(data.data);
  };
  useEffect(() => {
    fetchMenuData();
  }, []);
  
  return (
    <div className="BackApp">
      <h1>Menu Table</h1>
      <ul>
        {menuData?.map(item => (
          <li key={item.id}>
            {item.menu} - {item.category} - {item.price}
            <img src={item.image_url} alt={item.menu} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BackApp;