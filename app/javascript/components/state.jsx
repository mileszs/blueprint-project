import * as React from 'react';
const { createContext, useContext, useState, useEffect } = React;

import AssessmentAPI from "../AssessmentAPI";
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
      AssessmentAPI.getTemplate()
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