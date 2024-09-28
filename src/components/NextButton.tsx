import { useDispatch, useSelector } from 'react-redux';
import { finish, nextQuestion, selectQuiz } from '../redux/quizSlice';
import { AppDispatch } from '../redux/store';

const NextButton = () => {
  const { questions, answer, index } = useSelector(selectQuiz);

  const numQuestion = questions.length;
  const dispatch: AppDispatch = useDispatch();

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
