import React, { useState, useRef, useEffect, useContext } from 'react';
import { useDrag } from 'react-dnd';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { TasksContext } from '../TasksContext';
import { createTask } from '../model/Task';
import './Card.css';

import { CARD_TYPE } from './ItemTypes';

const Card = ({task, stage, closeNewCardCallback}) => {
  const [editing, setEditing] = useState(!task);
  const [taskTitle, setTaskTitle] = useState(task && task.title);
  const [onHover, setOnHover] = useState(false);
  const editInput = useRef(null);
  const draggableCardRef = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: CARD_TYPE,
      id: task.id,
      task,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  drag(draggableCardRef);

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
    //TODO add task to main list
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
            {onHover && <EditOutlinedIcon fontSize="inherit"/>}
          </div>
          <div className="title">{taskTitle}</div>
        </div>
      )}
    </div>
  );
}

export default Card;