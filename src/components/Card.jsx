import React, { useState, useRef, useEffect, useContext } from 'react';
import { TasksContext } from '../TasksContext';
import { createTask } from '../model/Task';
import './Card.css';

const TaskCard = ({task, stage, closeNewCardCallback}) => {
  const [editing, setEditing] = useState(!task);
  const [taskTitle, setTaskTitle] = useState(task && task.title);
  const editInput = useRef(null);

  const [state, setState] = useContext(TasksContext);

  const exitCardEditing = () => {
    setEditing(false);
    if (!task && closeNewCardCallback) {
      closeNewCardCallback();
    }
  }

  const saveTask = () => {
    createTask({ title: taskTitle, stage });
    //TODO add task to main list
    setState({stages: state.stages});
    exitCardEditing();
  }

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
            </div>
          </div>
        </div>
      ) : (
        <div className="title">{taskTitle}</div>
      )}
    </div>
  );
}

export default TaskCard;