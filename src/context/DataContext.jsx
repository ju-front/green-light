import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  // 1. 추가하고 싶은 변수 및 변경 함수를 다음과 같이 추가합니다.
  const [username, setUsername] = useState("khw");

  // 2. 위에서 추가한 변수들을 value={{ 여기 }}에 삽입합니다.(끝)
  return (
    <DataContext.Provider value={{ username, setUsername }}>
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => useContext(DataContext);
