import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TaskCard from './TaskCard';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    background: '#bbb',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 400,
    padding: theme.spacing(1)
  }
}));

const Column = ({title, columnId, tasks}) => {
  const classes = useStyles();
  const columnTasks = tasks.filter(task => task.columnId === columnId);

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={12}>
          <Grid item xs={12}>
            <div className={classes.title}>{title}</div>
          </Grid>
          {columnTasks.map(task => (
            <Grid item xs={12}>
              <TaskCard title={task.title} />
            </Grid>
          ))}
        </Grid>
    </Paper>
  );
}

export default Column;