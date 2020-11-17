import React, { useState } from 'react';
import TaskCard from './TaskCard';
import './Column.css';

const Column = ({title, columnId, tasks}) => {
  const columnTasks = tasks.filter(task => task.columnId === columnId);

  const [showNewCard, toggleNewCard] = useState(false);

  const cancelNewCard = () => {
    toggleNewCard(false);
  }

  return (
    <div className="column">
      <div className="title">{title}</div>
      {columnTasks.map(task => (
        <TaskCard title={task.title} />
      ))}
      {showNewCard && (
        <TaskCard columnId={columnId} cancelNewCardCallback={cancelNewCard} />
      )}
      <div className={classes.addCard} onClick={() => toggleNewCard(true)}>+ Add another card</div>
    </div>
  );
}

export default Column;