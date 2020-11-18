import React, { useState, useRef, useContext, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { TasksContext } from '../TasksContext';

import Card from './Card';
import './Column.css';

import { CARD_TYPE } from './ItemTypes';

const Column = ({stage}) => {
  const { title } = stage;
  const [showNewCard, toggleNewCard] = useState(false);
  const [state, setState] = useContext(TasksContext);
  const [columnTitle, setColumnTitle] = useState(stage.title);
  const [editing, setEditing] = useState(false);
  const editInput = useRef(null);

  const updateContext = () => setState({stages: state.stages});
  // Make column droppable
  const [, drop] = useDrop({
    accept: CARD_TYPE,
    drop(item) {
      stage.addTask(item.task);
      updateContext();
    },
    canDrop() {
      return !stage.tasks.length;
    }
  });
  const columnRef = useRef(null);
  drop(columnRef);

  const cancelNewCard = () => {
    toggleNewCard(false);
  }

  const handleTextChange = (event) => {
    setColumnTitle(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      stage.title = columnTitle;
      setEditing(false);
      updateContext();
    }
  }
  useEffect(() => {
    // if editing, set focus on textarea when component loads
    if (editing) {
      editInput.current.focus();
    }
  });

  stage.tasks.sort((taskA, taskB) => taskA.position < taskB.position);
  return (
    <div className="column" ref={ columnRef }>
      {editing ? (
        <input
          ref={editInput}
          className="title"
          name={`${stage.id}-change`}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          value={columnTitle}></input>
      ) : (
        <div
          className="title"
          onClick={() => setEditing(true)}>{title}</div>
      )}
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