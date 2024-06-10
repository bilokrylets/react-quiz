import { useEffect } from 'react';
import { actionType } from '../App';

type Props = {
  dispatch: React.Dispatch<actionType>;
  secondsRemaining: number;
};

const Timer = ({ dispatch, secondsRemaining }: Props) => {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
};
export default Timer;
