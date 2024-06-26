import React, { useState } from 'react';
import ReceiptSignIn from './ReceiptSignIn';

const ReceiptSignInTest = () => {
  const [userID, setUserID] = useState('');
  const [receiptID, setReceiptID] = useState('');
  const [response, setResponse] = useState(null);
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

  const handleSignIn = async () => {
    const result = await ReceiptSignIn(userID, allergyData, receiptID);
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
      <h1>Receipt Sign In Test</h1>
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
      <button onClick={handleSignIn}>Sign In</button>
      {response && (
        <div>
          <h3>Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ReceiptSignInTest;
