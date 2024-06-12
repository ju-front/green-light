import React from 'react';
import CreateReceiptTest from './api/CreateReceiptTest';
import SignInTest from './api/SignInTest';
import ShowReceiptTest from './api/ShowReceiptTest';
// import MarkSoldOutTest from './api/MarkSoldOutTest';

function App() {
  return (
    <div className="BackApp">
      <CreateReceiptTest />
      <SignInTest />
      <ShowReceiptTest />
      {/* <MarkSoldOutTest /> */}
    </div>
  );
}

export default App;
