import React, { useContext } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TasksContext } from '../TasksContext';
import './Board.css';
import Column from './Column';

const Board = () => {
  const [state] = useContext(TasksContext);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board">
        {state.stages.map(stage => (
          <Column stage={stage} key={stage.id} />
        ))}
      </div>
    </DndProvider>
  );
}

export default Board;