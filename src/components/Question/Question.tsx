import { Question as QuestionType } from '../../common/types';
import QuestionOptions from './QuestionOptions';

type Props = {
  question: QuestionType;
  answer: number | null;
};

const Question = ({ question, answer }: Props) => {
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        <QuestionOptions question={question} answer={answer} />
      </div>
    </div>
  );
};
export default Question;
