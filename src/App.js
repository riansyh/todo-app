import React, { useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { initialState, reducer } from './utils/reducer';

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
