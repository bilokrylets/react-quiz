export type Question = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type InitialStateType = {
  questions: Question[] | [];
  status: 'loading' | 'error' | 'ready' | 'active' | 'finish';
  index: number;
  answer: null | number;
  points: number;
  highscore: number;
  secondsRemaining: number;
};

export type actionType = {
  type?: string;
  payload?: [] | number;
};
