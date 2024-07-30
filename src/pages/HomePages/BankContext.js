// BankContext.js
import React, { createContext, useContext, useState } from 'react';

export const BankContext = createContext();

export const useBank = () => {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error('useBank must be used within a BankProvider');
  }
  return context;
};

export const BankProvider = ({ children }) => {
  const [bank, setBank] = useState(null);

  return (
    <BankContext.Provider value={{ bank, setBank }}>
      {children}
    </BankContext.Provider>
  );
};
