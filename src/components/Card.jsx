import React, { useState, useRef, useEffect, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { TasksContext } from '../TasksContext';
import { createTask } from '../model/Task';
import { ReactComponent as EditIcon } from '../assets/icons/edit-icon.svg';
import './Card.css';

import { CARD_TYPE } from './ItemTypes';

const Card = ({task, stage, closeNewCardCallback}) => {
  const [editing, setEditing] = useState(!task);
  const [taskTitle, setTaskTitle] = useState(task && task.title);
  const [onHover, setOnHover] = useState(false);
  const editInput = useRef(null);
  const draggableCardRef = useRef(null);

  const [, drop] = useDrop({
    accept: CARD_TYPE,
    hover(item, monitor) {
      if (!draggableCardRef.current) {
          return;
      }
      const dragIndex = item.task.position;
      const hoverIndex = task.position;

      const dragStage = item.task.stage;
      const hoverStage = task.stage;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex && dragStage.id === hoverStage.id) {
          return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = draggableCardRef.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
      }
      // Time to actually perform the action
      item.task.setNewPosition(hoverIndex, hoverStage);
      setState({stages: state.stages});
    },
  });


  const [{ isDragging }, drag] = useDrag({
    item: {
      type: CARD_TYPE,
      id: task ? task.id : '-',
      task,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
  });
  drag(drop(draggableCardRef));

  const [state, setState] = useContext(TasksContext);

  const exitCardEditing = () => {
    setEditing(false);
    if (!task && closeNewCardCallback) {
      closeNewCardCallback();
    }
  }

  const saveTask = () => {
    if (task) {
      task.title = taskTitle;
    } else {
      createTask({ title: taskTitle, stage });
    }
    //add task to main list
    setState({stages: state.stages});
    exitCardEditing();
  }

  const deleteTask = () => {
    task.stage.removeTask(task);
    setState({stages: state.stages});
    exitCardEditing();
  }

  const onMouseEnter = () => setOnHover(true);
  const onMouseLeave = () => setOnHover(false);

  useEffect(() => {
    // if editing, set focus on textarea when component loads
    if (editing) {
      editInput.current.focus();
    }
  });

  return (
    <div className="card">
      {editing ? (
        <div>
          <div className="modal-outer" />
          <div className="modal-edit-card">
            <textarea
              rows="3"
              className="edit-title"
              onChange={(event) => setTaskTitle(event.target.value)}
              ref={editInput}
            >
              {taskTitle}
            </textarea>
            <div className="actions">
              <div className="button" onClick={saveTask}>Save</div>
              <div className="button cancel" onClick={exitCardEditing}>Cancel</div>
              {task && <div className="button delete" onClick={deleteTask}>Delete</div>}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`card-display ${isDragging ? 'dragging' : ''}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={() => setEditing(true)}
          ref={draggableCardRef}
        >
          <div className="card edit-icon">
            {onHover && <EditIcon style={{height: '12px', width: '12px'}}/>}
          </div>
          <div className="title">{taskTitle}</div>
        </div>
      )}
    </div>
  );
}

export default Card;