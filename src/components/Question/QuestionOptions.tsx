import { useDispatch, useSelector } from 'react-redux';
import { newAnswer, selectQuiz } from '../../redux/quizSlice';
import { AppDispatch } from '../../redux/store';

const QuestionOptions = () => {
  const { questions, answer, index } = useSelector(selectQuiz);
  const dispatch: AppDispatch = useDispatch();

  const hasAnswered = answer !== null;
  const question = questions[index];

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
