import { useDispatch, useSelector } from 'react-redux';
import { restart, selectQuiz } from '../redux/quizSlice';
import { AppDispatch } from '../redux/store';

const FinishScreen = () => {
  const { questions, points, highscore } = useSelector(selectQuiz);
  const dispatch: AppDispatch = useDispatch();

  const maxPoints = questions.reduce(
    (prev: number, cur: { points: number }) => prev + cur.points,
    0,
  );
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = '🎖️';
  if (percentage > 80 && percentage < 100) emoji = '🥳';
  if (percentage < 80) emoji = '😐';

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{' '}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button className="btn btn-ui" onClick={() => dispatch(restart())}>
        Restart quiz
      </button>
    </>
  );
};
export default FinishScreen;
