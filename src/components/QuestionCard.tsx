import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
        <button disabled={userAnswer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
      </div>
    ))}
  </div>
</div>
);

export default QuestionCard;

