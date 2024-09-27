import { useEffect } from 'react';
import { tick } from '../redux/quizSlice';
import { AppDispatch } from '../redux/store';

type Props = {
  dispatch: AppDispatch;
  secondsRemaining: number;
};

const Timer = ({ dispatch, secondsRemaining }: Props) => {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(function () {
      dispatch(tick());
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
