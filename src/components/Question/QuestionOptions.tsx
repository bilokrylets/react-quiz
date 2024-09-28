import { useDispatch } from 'react-redux';
import { Question } from '../../common/types';
import { newAnswer } from '../../redux/quizSlice';
import { AppDispatch } from '../../redux/store';

type Props = {
  question: Question;
  answer: number | null;
};

const QuestionOptions = ({ question, answer }: Props) => {
  const dispatch: AppDispatch = useDispatch();
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
