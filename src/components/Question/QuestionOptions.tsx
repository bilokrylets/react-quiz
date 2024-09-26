import { UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { Question } from '../../common/types';
import { newAnswer } from '../../redux/quizSlice';

type Props = {
  question: Question;
  dispatch: Dispatch<UnknownAction>;
  answer: number | null;
};

const QuestionOptions = ({ question, answer, dispatch }: Props) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch(newAnswer(index))}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default QuestionOptions;
