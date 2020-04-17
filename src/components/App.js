import React, { useState } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import HeaderBar from './HeaderBar'
import SideBar from './SideBar'

import {
  CssBaseline,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App(props) {
  const classes = useStyles();
  const [ mobileOpen, setMobileOpen ] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderBar
        handleDrawerToggle={handleDrawerToggle} />
      <SideBar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo} />
      </main>
    </div>
  );
}

export default App;
