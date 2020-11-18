import React, { useState } from 'react';
import Card from './Card';
import './Column.css';

const Column = ({stage}) => {
  const { title } = stage;
  const [showNewCard, toggleNewCard] = useState(false);

  const cancelNewCard = () => {
    toggleNewCard(false);
  }

  return (
    <div className="column">
      <div className="title">{title}</div>
      {stage.tasks.map(task => (
        <Card task={task} />
      ))}
      {showNewCard && (
        <Card stage={stage} closeNewCardCallback={cancelNewCard} />
      )}
      <div className="add-another-card" onClick={() => toggleNewCard(true)}>+ Add another card</div>
    </div>
  );
}

export default Column;