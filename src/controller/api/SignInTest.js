import React, { useState } from 'react';
import SignIn from './SignIn';

function SignInTest() {
  const [userID, setUserID] = useState('');
  const [allergyInfo, setAllergyInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    const response = await SignIn(userID);
    if (response.error) {
      setError(response.error);
      setAllergyInfo(null);
    } else {
      setError(null);
      setAllergyInfo(response.user);
    }
  };

  return (
    <div className="SignInTest">
      <h1>Sign In</h1>
      <input 
        type="text" 
        value={userID} 
        onChange={(e) => setUserID(e.target.value)} 
        placeholder="Enter User ID" 
      />
      <button onClick={handleSignIn}>Sign In</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {allergyInfo && (
        <div>
          <h2>Allergy Information</h2>
          <p>Gluten: {allergyInfo.gluten ? 'Yes' : 'No'}</p>
          <p>Dairy: {allergyInfo.dairy ? 'Yes' : 'No'}</p>
          <p>Egg: {allergyInfo.egg ? 'Yes' : 'No'}</p>
          <p>Shellfish: {allergyInfo.shellfish ? 'Yes' : 'No'}</p>
          <p>Nut: {allergyInfo.nut ? 'Yes' : 'No'}</p>
          <p>Soy: {allergyInfo.soy ? 'Yes' : 'No'}</p>
          <p>Fish: {allergyInfo.fish ? 'Yes' : 'No'}</p>
          <p>Celery: {allergyInfo.celery ? 'Yes' : 'No'}</p>
          <p>Mustard: {allergyInfo.mustard ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default SignInTest;
