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
