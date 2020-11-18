import React, { useState, useRef, useContext } from 'react';
import { useDrop } from 'react-dnd';
import { TasksContext } from '../TasksContext';

import Card from './Card';
import './Column.css';

import { CARD_TYPE } from './ItemTypes';

const Column = ({stage}) => {
  const { title } = stage;
  const [showNewCard, toggleNewCard] = useState(false);
  const [state, setState] = useContext(TasksContext);
  // Make column droppable
  const [, drop] = useDrop({
    accept: CARD_TYPE,
    drop(item) {
      stage.addTask(item.task);
      setState({stages: state.stages});
    }
  });
  const columnRef = useRef(null);
  drop(columnRef);

  const cancelNewCard = () => {
    toggleNewCard(false);
  }

  return (
    <div className="column" ref={ columnRef }>
      <div className="title">{title}</div>
      {stage.tasks.map(task => (
        <Card task={task} key={task.id}/>
      ))}
      {showNewCard && (
        <Card stage={stage} closeNewCardCallback={cancelNewCard} />
      )}
      <div className="add-another-card" onClick={() => toggleNewCard(true)}>+ Add another card</div>
    </div>
  );
}

export default Column;