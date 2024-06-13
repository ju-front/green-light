import React, { useState } from 'react';
import MarkAllergyOccurrence from './MarkAllergyOccurrence';

function MarkAllergyOccurrenceTest() {
  const [userAllergies, setUserAllergies] = useState({
    gluten: true,
    dairy: false,
    egg: true,
    shellfish: false,
    nut: true,
    soy: false,
    fish: true,
    celery: false,
    mustard: true
  });
  const [allergyMenus, setAllergyMenus] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckAllergies = async () => {
    const response = await MarkAllergyOccurrence(userAllergies);
    if (response.error) {
      setError(response.error);
      setAllergyMenus(null);
    } else {
      setError(null);
      setAllergyMenus(response.menus);
    }
  };

  return (
    <div className="MarkAllergyOccurrenceTest">
      <h1>Check Allergy Occurrence</h1>
      <button onClick={handleCheckAllergies}>Check Allergies</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {allergyMenus && (
        <div>
          <h2>Menus with Allergens</h2>
          <ul>
            {allergyMenus.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MarkAllergyOccurrenceTest;
