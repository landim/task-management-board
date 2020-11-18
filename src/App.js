import React from 'react';
import './App.css';
import { TasksProvider } from "./TasksContext";
import Board from './components/Board';

function App() {
  return (
    <TasksProvider>
      <div className="main">
        <div className="title">{"TASK MANAGEMENT BOARD"}</div>
        <Board />
      </div>
    </TasksProvider>
  );
}

export default App;
