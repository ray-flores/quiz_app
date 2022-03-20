

import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import { QuestionState, Difficulty } from './API';
// Styles
import { GlobalStyle } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // call api function 
  //console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  //console.log(questions);

  // make API call
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);


  };

  //triggered when user selects ans
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // users answer
      const answer = e.currentTarget.value;
      // check user answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // add to score if correct
      if (correct) setScore(prev => prev + 1);
      // save answer in the array for userAnswers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  // triggers when user clicks for next question
  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }

  }


  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>REACT QUIZ</h1>

        {/*} show start button only when game is over or user is on the last question */}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={startQuiz}>
            Start
          </button>
        ) : null}

        {!gameOver ? <p className='score'>Score: {score}</p> : null}

        {loading && <p>Loading Questions... </p>}

        {/* add one because first item in array has index 0 */}
        {!loading && !gameOver && (
          <QuestionCard 
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? ( 
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;
