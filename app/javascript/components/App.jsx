import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import AssessmentSection from "./AssessmentSection"

export const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AssessmentSection />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};
