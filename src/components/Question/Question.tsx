import { useSelector } from 'react-redux';
import { selectQuiz } from '../../redux/quizSlice';
import QuestionOptions from './QuestionOptions';

const Question = () => {
  const { questions, index } = useSelector(selectQuiz);
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        <QuestionOptions />
      </div>
    </div>
  );
};

export default Question;
