import * as React from "react";
import { useAppState } from "./state";

const CompletedAssessment = ({ section }) => {
  const [state] = useAppState();
  const answers = state.answers.map((answer) => {
    return (
      <li key={answer.question_id}>
        {answer.question_id} - {answer.value}
      </li>
    );
  });

  return (
    <section>
      <h1>{section.title}</h1>
      <p>You've completed the assessment. Thank you!</p>
      <ul>{answers}</ul>
    </section>
  );
};

export default CompletedAssessment;