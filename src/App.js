import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="main">
      <div className="title">{"TASK MANAGEMENT BOARD"}</div>
      <Board />
    </div>
  );
}

export default App;
