import React, { useState } from 'react';
import signIn from './SignIn'; // SignIn.js 파일을 임포트합니다.

function SignInForm() {
  const [userID, setUserID] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [allergyInfo, setAllergyInfo] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setAllergyInfo({});

    const response = await signIn(userID);

    if (response.error) {
      setError(response.error);
    } else {
      setMessage(response.message);
      setAllergyInfo({
        gluten: response.user.gluten,
        dairy: response.user.dairy,
        egg: response.user.egg,
        shellfish: response.user.shellfish,
        nut: response.user.nut,
        soy: response.user.soy,
        fish: response.user.fish,
        celery: response.user.celery,
        mustard: response.user.mustard,
      });
    }
  };

  return (
    <div className="SignInForm">
      <h1>Sign In</h1>
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
        <button type="submit">Sign In</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {Object.keys(allergyInfo).length > 0 && (
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

export default SignInForm;
