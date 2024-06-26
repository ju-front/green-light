import React from 'react';

import SignInTest from './api/auth/SignInTest';
import SignUpTest from './api/auth/SignUpTest';
import ReceiptSignInTest from './api/auth/ReceiptSignInTest';

import CalculateNutritionTest from './api/menu/CalculateNutritionTest';
import FetchMenuTest from './api/menu/FetchMenuTest';
//import MarkAllergyOccurrenceTest from './api/menu/MarkAllergyOccurrenceTest';
//import MarkSoldOutTest from './api/menu/MarkSoldOutTest';

import CreateReceiptTest from './api/receipt/CreateReceiptTest';
import ShowReceiptTest from './api/receipt/ShowReceiptTest';

function BackApp() {
  return (
    <div className="BackApp">
      <SignInTest />
      <SignUpTest />
      <ReceiptSignInTest />
      
      <CalculateNutritionTest />
      <FetchMenuTest />
      
      <CreateReceiptTest />
      <ShowReceiptTest />
      {/* <MarkAllergyOccurrenceTest /> */}
      {/* <MarkSoldOutTest /> */}
    </div>
  );
}

export default BackApp;
