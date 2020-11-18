import React, { useContext } from 'react';
import { TasksContext } from '../TasksContext';
import './Board.css';
import Column from './Column';

const Board = () => {
  const [state] = useContext(TasksContext);

  return (
    <div className="board">
      {state.stages.map(stage => (
        <Column stage={stage} key={stage.id} />
      ))}
    </div>
  );
}

export default Board;