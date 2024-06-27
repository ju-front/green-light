import React, { useState } from 'react';
import CalculateNutrition from './CalculateNutrition';

function CalculateNutritionTest() {
  const [order, setOrder] = useState({
    items: [
      { name: "focaccia", quantity: 2 },
      { name: "gelato", quantity: 1 },
      { name: "panna_cotta", quantity: 3 },
      { name: "bruschetta", quantity: 3 }
    ],
    total: 26000
  });
  const [totalNutrition, setTotalNutrition] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    const response = await CalculateNutrition(order);
    if (response.error) {
      setError(response.error);
      setTotalNutrition(null);
    } else {
      setError(null);
      setTotalNutrition(response.totalNutrition);
    }
  };

  return (
    <div className="CalculateNutritionTest">
      <h1>Calculate Total Nutrition</h1>
      <button onClick={handleCalculate}>Calculate Nutrition</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {totalNutrition && (
        <div>
          <h2>Total Nutrition</h2>
          <p>Carbohydrate: {totalNutrition.carbohydrate}g</p>
          <p>Protein: {totalNutrition.protein}g</p>
          <p>Fat: {totalNutrition.fat}g</p>
          <p>Sodium: {totalNutrition.sodium}mg</p>
          <p>Cholesterol: {totalNutrition.cholesterol}mg</p>
        </div>
      )}
    </div>
  );
}

export default CalculateNutritionTest;
