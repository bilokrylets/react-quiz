import { actionType } from '../App';

type Props = {
  points: number;
  maxPoints: number;
  highscore: number;
  dispatch: React.Dispatch<actionType>;
};

const FinishScreen = ({ maxPoints, points, highscore, dispatch }: Props) => {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = '🎖️';
  if (percentage > 80 && percentage < 100) emoji = '🥳';
  if (percentage < 80) emoji = '😐';

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You dcored <strong>{points}</strong> out of{' '}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart quiz
      </button>
    </>
  );
};
export default FinishScreen;
