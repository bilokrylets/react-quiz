import { Question } from '../../common/types';
import { actionType } from '../../reducers/quizReducer';

type Props = {
  question: Question;
  dispatch: React.Dispatch<actionType>;
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
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default QuestionOptions;
