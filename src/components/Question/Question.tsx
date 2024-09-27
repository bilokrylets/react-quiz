import { Question as QuestionType } from '../../common/types';
import QuestionOptions from './QuestionOptions';
import { AppDispatch } from '../../redux/store';

type Props = {
  question: QuestionType;
  dispatch: AppDispatch;
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
