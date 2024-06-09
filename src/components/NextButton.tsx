import { actionType } from '../App';

type Props = {
  dispatch: React.Dispatch<actionType>;
  answer: number | null;
  index: number;
  numQuestion: number;
};

const NextButton = ({ dispatch, answer, index, numQuestion }: Props) => {
  if (answer === null) return null;
  if (index < numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
};
export default NextButton;
