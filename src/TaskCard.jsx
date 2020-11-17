import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: 'left',
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
    backgroundColor: '#eee',
    padding: theme.spacing(1.5)
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 400,
    padding: theme.spacing(1),
  }
}));

const TaskCard = ({title}) => {
  const classes = useStyles();
  const tasks = ["task1", "task2"];

  return (
    <Card className={classes.card}>
      <div className={classes.title}>{title}</div>
    </Card>
  );
}

export default TaskCard;