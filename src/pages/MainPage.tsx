import { useDispatch, useSelector } from 'react-redux';
import FinishScreen from '../components/FinishScreen';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Main from '../components/Main';
import NextButton from '../components/NextButton';
import Progress from '../components/Progress';
import Question from '../components/Question/Question';
import StartScreen from '../components/StartScreen';
import Timer from '../components/Timer';
import { dataReceived, selectQuiz } from '../redux/quizSlice';
import { AppDispatch } from '../redux/store';
import { useEffect } from 'react';
import Error from '../components/Error';
import { SERVER_URL } from '../constants';

function MainPage() {
  const { status } = useSelector(selectQuiz);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    fetch(`${SERVER_URL}/questions`)
      .then((res) => res.json())
      .then((data) => dispatch(dataReceived(data)))
      .catch(() => dispatch({ type: 'dataFailed' }));
  }, [dispatch]);

  return (
    <Main>
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {status === 'ready' && <StartScreen />}
      {status === 'active' && (
        <>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </>
      )}
      {status === 'finish' && <FinishScreen />}
    </Main>
  );
}
export default MainPage;
