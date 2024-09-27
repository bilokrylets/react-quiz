import { start } from '../redux/quizSlice';
import { AppDispatch } from '../redux/store';

type Props = {
  questionsNumber: number;
  dispatch: AppDispatch;
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
