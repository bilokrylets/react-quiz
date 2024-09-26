import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { Question as QuestionType } from '../../common/types';
import QuestionOptions from './QuestionOptions';

type Props = {
  question: QuestionType;
  dispatch: Dispatch<UnknownAction>;
  answer: number | null;
};

const Question = ({ question, answer, dispatch }: Props) => {
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        <QuestionOptions
          question={question}
          dispatch={dispatch}
          answer={answer}
        />
      </div>
    </div>
  );
};
export default Question;
