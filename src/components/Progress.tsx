import { useSelector } from 'react-redux';
import { selectQuiz } from '../redux/quizSlice';

const Progress = () => {
  const { questions, answer, index, points } = useSelector(selectQuiz);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (prev: number, cur: { points: number }) => prev + cur.points,
    0,
  );

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
};
export default Progress;
