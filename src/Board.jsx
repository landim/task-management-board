import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Column from './Column';

const useStyles = makeStyles((theme) => ({
  board: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Board = () => {
  const classes = useStyles();
  const tasks = [
    {
      title:"Task 1",
      columnId: 1
    },
    {
      title:"Task 2",
      columnId: 0
    },
    {
      title:"Task 3",
      columnId: 1
    },
    {
      title:"Task 4",
      columnId: 1
    },
    {
      title:"Task 5",
      columnId: 2
    },
  ]

  return (
    <div className={classes.board}>
      <Grid container spacing={3}>
      <Grid item xs={4}>
          <Column title="Column 1" columnId={0} tasks={tasks}/>
        </Grid>
        <Grid item xs={4}>
          <Column title="Column 2" columnId={1} tasks={tasks}/>
        </Grid>
        <Grid item xs={4}>
          <Column title="Column 3" columnId={2} tasks={tasks}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Board;