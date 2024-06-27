import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [receiptID, setReceiptID] = useState();
  const [username, setUsername] = useState("khw");
  const [allergyData, setAllergyData] = useState({
    "gluten": false,
    "dairy": false,
    "egg": false,
    "shellfish": false,
    "nut": false,
    "soy": false,
    "fish": false,
    "celery": false,
    "mustard": false
  });

  return (
    <DataContext.Provider value={{ username, setUsername, allergyData, setAllergyData, receiptID, setReceiptID }}>
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => useContext(DataContext);
