//supabase 값 업데이트
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function BackApp() {
  const [menuData, setMenuData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newPrice, setNewPrice] = useState('');

  // Fetch menu data from Supabase
  const fetchMenuData = async () => {
    const { data, error } = await supabase
      .from('MenuTable')
      .select('*');
    if (error) console.error('Error fetching data:', error);
    else setMenuData(data);
  };

  // Update menu item in Supabase
  const updateMenuItem = async (id, updatedFields) => {
    const { data, error } = await supabase
      .from('MenuTable')
      .update(updatedFields)
      .eq('id', id);
    if (error) console.error('Error updating data:', error);
    else {
      // Fetch updated data
      fetchMenuData();
      setSelectedItem(null);
      setNewPrice('');
    }
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
            {item.id} - {item.menu} - {item.category} - {item.price} - {item.order_count} - {item.nutrition_id}
            {/* <img src={item.image_url} alt={item.menu} width={100} height={100} /> */}
            <button onClick={() => setSelectedItem(item)}>Edit</button>
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div>
          <h2>Edit Item</h2>
          <p>{selectedItem.menu}</p>
          <label>
            New Price:
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </label>
          <button
            onClick={() => updateMenuItem(selectedItem.id, { price: parseInt(newPrice, 10) })}
          >
            Save
          </button>
          <button onClick={() => setSelectedItem(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

//export default BackApp;


//------------------------------------------------------------


//외래키로 연결된 테이블의 데이터 가져오기

import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function BackApp() {
  const [menuData, setMenuData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newPrice, setNewPrice] = useState('');

  // Fetch menu data along with nutrition data from Supabase
  const fetchMenuData = async () => {
    const { data, error } = await supabase
      .from('MenuTable')
      .select(`
        id,
        menu,
        category,
        price,
        order_count,
        nutrition_id,
        image_url,
        nutrition: nutrition_id (
          carbohydrate,
          protein,
          fat,
          sodium,
          cholesterol
        )
      `);
    if (error) console.error('Error fetching data:', error);
    else setMenuData(data);
  };

  // Update menu item in Supabase
  const updateMenuItem = async (id, updatedFields) => {
    const { data, error } = await supabase
      .from('MenuTable')
      .update(updatedFields)
      .eq('id', id);
    if (error) console.error('Error updating data:', error);
    else {
      // Fetch updated data
      fetchMenuData();
      setSelectedItem(null);
      setNewPrice('');
    }
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
            {item.id} - {item.menu} - {item.category} - {item.price} - {item.order_count}
            <br />
            Nutrition: Calories: {item.nutrition.carbohydrate}, Protein: {item.nutrition.protein}, Fat: {item.nutrition.fat}, Carbs: {item.nutrition.carbs}
            <br />
            {/* <img src={item.image_url} alt={item.menu} width={100} height={100} /> */}
            <button onClick={() => setSelectedItem(item)}>Edit</button>
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div>
          <h2>Edit Item</h2>
          <p>{selectedItem.menu}</p>
          <label>
            New Price:
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </label>
          <button
            onClick={() => updateMenuItem(selectedItem.id, { price: parseInt(newPrice, 10) })}
          >
            Save
          </button>
          <button onClick={() => setSelectedItem(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default BackApp;


//------------------------------------------------------------


//UserTable에 데이터 추가하기
import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function BackApp() {
  const [userID, setUserID] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert a new user into the UserTable
    const { data, error } = await supabase
      .from('UserTable')
      .insert([{ userID }]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('User added:', data);
      setUserID('');  // Clear the input field
    }
  };

  return (
    <div className="BackApp">
      <h1>User Table</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default BackApp;


//------------------------------------------------------------

//UserTable ID 중복확인

import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function BackApp() {
  const [userID, setUserID] = useState('');
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    // Check if the userID already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('UserTable')
      .select('userID')
      .eq('userID', userID)
      .maybeSingle();

    if (fetchError) {
      console.error('Error checking userID:', fetchError);
      setError('An error occurred while checking user ID.');
      return;
    }

    if (existingUser) {
      setError('This user ID already exists. Please choose a different one.');
      return;
    }

    // Insert a new user into the UserTable
    const { data, error: insertError } = await supabase
      .from('UserTable')
      .insert([{ userID }]);

    if (insertError) {
      console.error('Error inserting data:', insertError);
      setError('An error occurred while inserting the user.');
    } else {
      console.log('User added:', data);
      setUserID('');  // Clear the input field
    }
  };

  return (
    <div className="BackApp">
      <h1>User Table</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default BackApp;


//------------------------------------------------------------