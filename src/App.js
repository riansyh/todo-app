import React, { useContext, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state.push({
        key: state.length,
        taskName: action.value,
        isFinished: false,
      });
      return state;

    case 'CHECK':
      state[action.key].isFinished = !state[action.key].isFinished;
      return [...state];

    case 'DELETE':
      break;

    default:
      return state;
  }
};

export const TasksContext = React.createContext();

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  return (
    <TasksContext.Provider value={{ state: tasks, dispatch }}>
      <div className="container">
        <Header />
        <Main />
      </div>
    </TasksContext.Provider>
  );
}
export default App;
