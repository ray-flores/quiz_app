

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: string[];
  question: string;
  type: string;
}

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
  console.log(data);
} 

