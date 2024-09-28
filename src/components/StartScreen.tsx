import { useDispatch, useSelector } from 'react-redux';
import { selectQuiz, start } from '../redux/quizSlice';
import { AppDispatch } from '../redux/store';

type Props = {
  questionsNumber: number;
};

const StartScreen = ({ questionsNumber }: Props) => {
  const { highscore } = useSelector(selectQuiz);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>

      <h3>{questionsNumber} questions to test your react mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch(start())}>
        Let's start
      </button>

      <p className="start-highscore">Yout current highscore: {highscore}</p>
    </div>
  );
};
export default StartScreen;
