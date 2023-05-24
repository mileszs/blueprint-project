import * as React from "react";

const Answer = (props) => {
  return (
    <div>
      <input
        type="radio"
        id={props.answerKey}
        name={props.question_id}
        value={props.value}
        {...props.register(props.question_id, { required: true })}
      />
      <label htmlFor={props.answerKey}>{props.title}</label>
    </div>
  );
};

export default Answer;