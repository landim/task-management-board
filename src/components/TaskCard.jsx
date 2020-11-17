import React, { useState } from 'react';
import './TaskCard.css';

const TaskCard = ({title}) => {
  const [editing, setEditing] = useState(!task);
  const [taskTitle, setTaskTitle] = useState(task && task.title);

  const exitCardEditing = () => {
    setEditing(false);
    if (!task) {
      cancelNewCardCallback();
    }
  }

  return (
    <div className="card">
      {editing ? (
        <div>
          <div className={classes.modalOuter} />
          <div 
          className={classes.editTaskModal}
          // onBlur={exitCardEditing}
          >
            <TextField
              id="new-card-text"
              className={classes.editingTaskTitle}
              label="My task"
              multiline
              rows={3}
              value={taskTitle}
              onChange={() => setTaskTitle(taskTitle)}
            />

          </div>
        </div>
      ) : (
        <div className="title">{title}</div>
      )}
    </div>
  );
}

export default TaskCard;