import React from 'react';
import './TaskCard.css';

const TaskCard = ({title}) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
    </div>
  );
}

export default TaskCard;