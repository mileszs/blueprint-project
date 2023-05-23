import * as React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import data from "./data";

const questions = data.content.sections[0].questions;
const answers = data.content.sections[0].answers;

const Answer = (props) => {
  return <li>{props.title} ({props.value})</li>;
};

const Question = (props) => {
  return (
    <div>
      <label htmlFor={props.question_id}>{props.title}</label>
      <ul>
        {answers.map(answer => (
          <Answer {...answer} key={props.question_id + answer.value} />
        ))}
      </ul>
    </div>
  );
};

const QuestionnaireSection = ({ section }) => {
  return (
    <section>
      <h1>{section.title}</h1>
      {section.questions.map(question => (
        <Question {...question} answers={section.answers} key={question.question_id} />
      ))}
    </section>
  );
};

export const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<QuestionnaireSection section={data.content.sections[0]} />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};
