import * as React from "react";
import Answer from "./Answer";

const Question = ({ question_id, title, register, errors, answers }) => {
  const collection = answers.map((answer) => {
    const answerKey = question_id + answer.value;
    return <Answer {...answer} register={register} question_id={question_id} answerKey={answerKey} key={answerKey} />;
  });

  return (
    <fieldset>
      { errors[question_id] && <p>Please answer this question before proceeding. Thank you!</p> }
      <legend>{title}</legend>
      <div>
        {collection}
      </div>
    </fieldset>
  );
};

export default Question;