import React from 'react';
import TaskCard from './TaskCard';
import './Column.css';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     background: '#bbb',
//   },
//   title: {
//     fontSize: '1.5em',
//     fontWeight: 400,
//     padding: theme.spacing(1)
//   }
// }));

const Column = ({title, columnId, tasks}) => {
  const columnTasks = tasks.filter(task => task.columnId === columnId);

  return (
    <div className="column">
      <div className="title">{title}</div>
      {columnTasks.map(task => (
        <TaskCard title={task.title} />
      ))}
    </div>
  );
}

export default Column;