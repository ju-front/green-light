import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [receiptID, setReceiptID] = useState();
  const [username, setUsername] = useState("khw");

  // 2. 위에서 추가한 변수들을 value={{ 여기 }}에 삽입합니다.(끝)
  return (
    <DataContext.Provider value={{ username, setUsername, receiptID, setReceiptID }}>
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => useContext(DataContext);
