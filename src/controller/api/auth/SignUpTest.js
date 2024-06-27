import React, { useState } from 'react';
import SignUp from './SignUp';

const SignUpTest = () => {
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
    mustard: false
  });
  const [receiptID, setReceiptID] = useState('');
  const [response, setResponse] = useState(null);

  const handleSignUp = async () => {
    const result = await SignUp(userID, allergyData, receiptID);
    setResponse(result);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAllergyData((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  return (
    <div>
      <h1>Sign Up Test</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Receipt ID"
        value={receiptID}
        onChange={(e) => setReceiptID(e.target.value)}
      />
      <br />
      <h2>Allergies</h2>
      {Object.keys(allergyData).map((allergy) => (
        <div key={allergy}>
          <label>
            <input
              type="checkbox"
              name={allergy}
              checked={allergyData[allergy]}
              onChange={handleCheckboxChange}
            />
            {allergy}
          </label>
        </div>
      ))}
      <button onClick={handleSignUp}>Sign Up</button>
      {response && (
        <div>
          <h3>Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SignUpTest;
