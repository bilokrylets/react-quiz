import { useEffect } from 'react';
import { selectQuiz, tick } from '../redux/quizSlice';
import { AppDispatch } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';

const Timer = () => {
  const { secondsRemaining } = useSelector(selectQuiz);
  const dispatch: AppDispatch = useDispatch();

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
