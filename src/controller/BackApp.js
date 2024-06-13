import React from 'react';
import CreateReceiptTest from './api/CreateReceiptTest';
import SignInTest from './api/SignInTest';
import ShowReceiptTest from './api/ShowReceiptTest';
import SignUpTest from './api/SignUpTest';
import CalculateNutritionTest from './api/CalculateNutritionTest';
// import MarkSoldOutTest from './api/MarkSoldOutTest';

function App() {
  return (
    <div className="BackApp">
      <CreateReceiptTest />
      <SignInTest />
      <ShowReceiptTest />
      <SignUpTest />
      <CalculateNutritionTest />
      {/* <MarkSoldOutTest /> */}
    </div>
  );
}

export default App;
