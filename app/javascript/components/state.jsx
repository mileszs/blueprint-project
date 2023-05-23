import * as React from 'react';
const { createContext, useContext, useState } = React;

export const AppStateContext = createContext({});
 
export function AppProvider({ children }) {
  const value = useState({});
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
 
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}