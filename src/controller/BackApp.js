import React from 'react';
import CreateReceiptTest from './api/CreateReceiptTest';
import SignInTest from './api/SignInTest';
// import MarkSoldOutTest from './api/MarkSoldOutTest';

function App() {
  return (
    <div className="BackApp">
      <CreateReceiptTest />
      <SignInTest />
      {/* <MarkSoldOutTest /> */}
    </div>
  );
}

export default App;
