import React from "react";

// types
import { AnswerObject } from "../App";
// styles
//import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

// functional component
const QuestionCard: React.FC<Props> = ({ 
  question, 
  answers, 
  callback, 
  userAnswer, 
  questionNumber, 
  totalQuestions 
}) =>  (
<div>
  <p className="questionNumber">
    Question: {questionNumber} / {totalQuestions}
  </p>
  <p dangerouslySetInnerHTML={{ __html: question }}></p>
  <div>
    {answers.map(answer => (
      <div key={answer}>
        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
      </div>
    ))}
  </div>
</div>
);

export default QuestionCard;

