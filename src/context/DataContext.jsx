import React, { createContext, useState, useContext } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [receiptID, setReceiptID] = useState();
  const [username, setUsername] = useState("");
  const [allergyData, setAllergyData] = useState({
    gluten: false,
    dairy: false,
    egg: false,
    shellfish: false,
    nut: false,
    soy: false,
    fish: false,
    celery: false,
    mustard: false,
  });
  const [orderData, setOrderData] = useState({ items: {}, total_price: 0 });

  // 2. 위에서 추가한 변수들을 value={{ 여기 }}에 삽입합니다.(끝)
  return (
    <DataContext.Provider
      value={{
        username,
        setUsername,
        allergyData,
        setAllergyData,
        receiptID,
        setReceiptID,
        orderData,
        setOrderData,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => useContext(DataContext);
