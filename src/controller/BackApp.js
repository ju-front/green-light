import React from 'react';
import CreateReceiptTest from './api/CreateReceiptTest';
import SignInTest from './api/SignInTest';
import ShowReceiptTest from './api/ShowReceiptTest';
import SignUpTest from './api/SignUpTest';
import CalculateNutritionTest from './api/CalculateNutritionTest';
import MarkAllergyOccurrenceTest from './api/MarkAllergyOccurrenceTest';
// import MarkSoldOutTest from './api/MarkSoldOutTest';

function App() {
  return (
    <div className="BackApp">
      <CreateReceiptTest />
      <SignInTest />
      <ShowReceiptTest />
      <SignUpTest />
      <CalculateNutritionTest />
      <MarkAllergyOccurrenceTest />
      {/* <MarkSoldOutTest /> */}
    </div>
  );
}

export default App;
