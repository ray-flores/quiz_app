import React from 'react';
// Components
import QuestionCard from './components/QuestionCard';




const App = () => {

  // make API call
  const startQuiz = async () => {

  }

  //triggered when user selects ans
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  // triggers when user clicks for next question
  const nextQuestion = () => {


  }


  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startQuiz}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions... </p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
