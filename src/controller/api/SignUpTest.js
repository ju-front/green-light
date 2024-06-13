import React, { useState } from 'react';
import SignUp from './SignUp';

function SignUpTest() {
  const [userID, setUserID] = useState('');
  const [allergyData, setAllergyData] = useState({
    gluten: false,
    dairy: false,
    egg: false,
    shellfish: false,
    nut: false,
    soy: false,
    fish: false,
    celery: false,
    mustard: false,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [coupon, setCoupon] = useState(null);

  const handleSignUp = async () => {
    const response = await SignUp(userID, allergyData);
    if (response.error) {
      setError(response.error);
      setMessage('');
      setCoupon(null);
    } else {
      setError(null);
      setMessage(response.message);
      setCoupon(response.coupon);
    }
  };

  const handleAllergyChange = (e) => {
    const { name, checked } = e.target;
    setAllergyData((prevData) => ({ ...prevData, [name]: checked }));
  };

  return (
    <div className="SignUpTest">
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
      <div>
        <h2>Allergies</h2>
        {Object.keys(allergyData).map((allergy) => (
          <div key={allergy}>
            <label>
              <input
                type="checkbox"
                name={allergy}
                checked={allergyData[allergy]}
                onChange={handleAllergyChange}
              />
              {allergy}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleSignUp}>Sign Up</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p>{message}</p>}
      {coupon !== null && <p>Coupon: {coupon}</p>}
    </div>
  );
}

export default SignUpTest;
