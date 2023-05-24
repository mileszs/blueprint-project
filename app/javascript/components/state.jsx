import * as React from 'react';
const { createContext, useContext, useState, useEffect } = React;

import data from "./data";

export const AppStateContext = createContext({});
 
export function AppProvider({ children }) {
  initialState = { 
    section: { questions: [] }, 
    answers: [],
    questionNum: 1
  }
  const [state, setState] = useState(initialState);
  useEffect(() => {
    fetch("http://localhost:3000/api/assessments/1")
      .then(response => response.json())
      .then((data) => {
        const {section, ...rest} = state;
        setState({section: data, ...rest});
      });
  }, []);
  return (
    <AppStateContext.Provider value={[state, setState]}>
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