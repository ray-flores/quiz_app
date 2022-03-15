import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

// combines wrong answers with right answer in an array
export type QuestionState = Question & { answers: string[] };

// use enum to ensure only these valid values are used
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

// logic for fetching data from API
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  // use two awaits: 1st for the fetch itself then wait to convert it to JSON
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => (
    {
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers, 
        question.correct_answer])
    }
  ))
} 

