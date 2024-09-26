import { UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { finish, nextQuestion } from '../redux/quizSlice';

type Props = {
  dispatch: Dispatch<UnknownAction>;
  answer: number | null;
  index: number;
  numQuestion: number;
};

const NextButton = ({ dispatch, answer, index, numQuestion }: Props) => {
  if (answer === null) return null;
  if (index < numQuestion - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch(nextQuestion())}>
        Next
      </button>
    );

  if (index === numQuestion - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch(finish())}>
        Finish
      </button>
    );
};
export default NextButton;
