import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

type initialStateType = {
  questions: [];
  status: 'loading' | 'error' | 'ready' | 'active' | 'finish';
};

type actionType = {
  type?: string;
  payload?: [];
};

const initialState: initialStateType = { questions: [], status: 'loading' };

function reducer(
  state: initialStateType,
  action: actionType,
): initialStateType {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    default:
      throw new Error('Action unknown');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch(() => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        <p>1/15</p>
        <p>question</p>
      </Main>
    </div>
  );
}

export default App;
