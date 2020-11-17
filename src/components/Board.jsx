import React from 'react';
import './Board.css';
import Column from './Column';

const Board = () => {
  const tasks = [
    {
      title:"Task 1",
      columnId: 1
    },
    {
      title:"Task 2",
      columnId: 0
    },
    {
      title:"Task 3",
      columnId: 1
    },
    {
      title:"Task 4",
      columnId: 1
    },
    {
      title:"Task 5",
      columnId: 2
    },
  ]

  return (
    <div className="board">
      <Column title="Column 1" columnId={0} tasks={tasks}/>
      <Column title="Column 2" columnId={1} tasks={tasks}/>
      <Column title="Column 3" columnId={2} tasks={tasks}/>
    </div>
  );
}

export default Board;