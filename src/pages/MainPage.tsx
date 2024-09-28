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
  const {
    questions,
    status,
    answer,
    index,
    points,
    highscore,
    secondsRemaining,
  } = useSelector(selectQuiz);

  const dispatch: AppDispatch = useDispatch();

  const questionsNum = questions.length;
  const maxPoints = questions.reduce(
    (prev: number, cur: { points: number }) => prev + cur.points,
    0,
  );

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
      {status === 'ready' && <StartScreen questionsNumber={questionsNum} />}
      {status === 'active' && (
        <>
          <Progress
            index={index}
            numQuestions={questionsNum}
            points={points}
            maxPoints={maxPoints}
            answer={answer}
          />
          <Question question={questions[index]} answer={answer} />
          <Footer>
            <Timer secondsRemaining={secondsRemaining} />
            <NextButton
              answer={answer}
              numQuestion={questionsNum}
              index={index}
            />
          </Footer>
        </>
      )}
      {status === 'finish' && (
        <FinishScreen
          points={points}
          maxPoints={maxPoints}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
    </Main>
  );
}
export default MainPage;
