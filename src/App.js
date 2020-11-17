import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/styles";
import {
  CssBaseline,
  createMuiTheme
} from "@material-ui/core";
import Board from './components/Board';

const theme = createMuiTheme({
  palette: {
    type: "light",
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#888',
    height: '100vw'
  },
  title: {
    fontWeight: 500,
    fontSize: '1.8em',
    margin: '15px',
    color: '#fff'
  },
}));

function App() {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.title}>{"TASK MANAGEMENT BOARD"}</div>
          </Grid>
          <Grid item xs={12}>
            <Board />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
