import { UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { start } from '../redux/quizSlice';

type Props = {
  questionsNumber: number;
  dispatch: Dispatch<UnknownAction>;
};

const StartScreen = ({ questionsNumber, dispatch }: Props) => {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questionsNumber} questions to test your react mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch(start())}>
        Let's start
      </button>
    </div>
  );
};
export default StartScreen;
