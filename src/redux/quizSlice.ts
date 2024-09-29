import { createSlice } from '@reduxjs/toolkit';
import { InitialStateType } from './types';
import { RootState } from './store';
import { SECS_PER_QUESTION } from '../constants';

const initialState: InitialStateType = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: Number(localStorage.getItem('highscore')) || 0,
  secondsRemaining: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    dataReceived: (state, action) => {
      state.questions = action.payload;
      state.status = 'ready';
    },
    dataFailed: (state) => {
      state.status = 'error';
    },
    start: (state) => {
      state.status = 'active';
      state.secondsRemaining = state.questions.length * SECS_PER_QUESTION;
    },
    newAnswer: (state, action) => {
      const question = state.questions.at(state.index);

      if (question) {
        state.answer = action.payload;
        state.points =
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points;
      }
    },
    nextQuestion: (state) => {
      state.index += 1;
      state.answer = null;
    },
    finish: (state) => {
      state.status = 'finish';
      state.highscore =
        state.points > state.highscore ? state.points : state.highscore;
      localStorage.setItem('highscore', String(state.highscore));
    },
    restart: (state) => {
      (state.status = 'ready'),
        (state.index = 0),
        (state.answer = null),
        (state.points = 0);
    },
    tick: (state) => {
      state.secondsRemaining -= 1;
      state.status = state.secondsRemaining === 0 ? 'finish' : state.status;
    },
  },
});

export const {
  dataReceived,
  dataFailed,
  start,
  newAnswer,
  nextQuestion,
  finish,
  restart,
  tick,
} = quizSlice.actions;

export const selectQuiz = (state: RootState) => state.quiz;

export default quizSlice.reducer;
