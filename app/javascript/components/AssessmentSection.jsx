import * as React from "react";
import { useForm } from "react-hook-form";
import { useAppState } from "./state";
import Question from "./Question";
import CompletedAssessment from "./CompletedAssessment";
import data from "./data";
import AssessmentAPI from "../AssessmentAPI";

const AssessmentSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [state, setState] = useAppState();

  const section = state.section;
  const questionNum = state.questionNum || 1;
  const totalQuestions = section.questions.length;
  const question = section.questions[questionNum - 1];
  const buttonLabel = state.questionNum == totalQuestions ? "Submit" : "Next";

  const saveAnswer = (data = {}) => {
    let { answers, ...rest } = state;

    if (questionNum <= totalQuestions) {
      answers = Object.entries(data).map(((entry) => {
        return { question_id: entry[0], value: entry[1] };
      }));
      setState({ ...rest, answers, questionNum: questionNum + 1 });
    }
    
    if (questionNum == totalQuestions) {
      AssessmentAPI.postAssessment({ answers })
        .then(response => response.json())
        .then(data => {
          console.log("Recommendations", data)
        });
    }
  };

  const prevAnswer = (e) => {
    e.preventDefault();
    setState({ ...state, questionNum: questionNum - 1 });
  };

  if (totalQuestions <= 0) { return <p>Loading...</p>; }
  if (totalQuestions >= 1 && questionNum > totalQuestions) {
    return <CompletedAssessment section={section} />;
  }

  return (
    <section>
      <h1>{section.title}</h1>
      <p>
        Question {questionNum} of {totalQuestions}:
      </p>
      <form>
        <Question
          {...question}
          answers={section.answers}
          key={question.question_id}
          register={register}
          errors={errors}
        />
        <button onClick={prevAnswer} type="button">Previous</button>
        <button onClick={handleSubmit(saveAnswer)}>Next</button>
      </form>
    </section>
  );
};

export default AssessmentSection;