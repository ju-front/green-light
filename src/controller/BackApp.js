import React from 'react';

import SignInTest from './api/auth/SignInTest';
import SignUpTest from './api/auth/SignUpTest';

import CalculateNutritionTest from './api/menu/CalculateNutritionTest';
import MarkAllergyOccurrenceTest from './api/menu/MarkAllergyOccurrenceTest';
import MarkSoldOutTest from './api/menu/MarkSoldOutTest';

import CreateReceiptTest from './api/receipt/CreateReceiptTest';
import ShowReceiptTest from './api/receipt/ShowReceiptTest';

function BackApp() {
  return (
    <div className="BackApp">
      <CreateReceiptTest />
      <SignInTest />
      <ShowReceiptTest />
      <SignUpTest />
      <CalculateNutritionTest />
      <MarkAllergyOccurrenceTest />
      <MarkSoldOutTest />
      {/* <MarkSoldOutTest /> */}
    </div>
  );
}

export default BackApp;
