import React, { useState } from 'react';
import CalculateNutrition from './CalculateNutrition';

function CalculateNutritionTest() {
  const [order, setOrder] = useState({
    bruschetta: 1,
    focaccia: 2
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
      setTotalNutrition(response);
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
