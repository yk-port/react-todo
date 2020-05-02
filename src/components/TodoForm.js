import React, { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';
import {
  ADD_TODO,
  // COMPLETE_TODO,
  // DELETE_TODO
} from '../actions'

import {
  TextField,
  Button,
  makeStyles
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '-webkit-fill-available',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function TodoForm() {
  const { dispatch } = useContext(TodosContext);
  const [ todoItem, setTodoItem ] = useState('');
  const classes = useStyles();

  const addTodo = e =>  {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      label: todoItem,
      complete: false
    })
    setTodoItem('');
  }

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={addTodo}>
      <TextField
        id="outlined-helperText"
        label="Enter Todo"
        variant="outlined"
        value={todoItem}
        onChange={e => setTodoItem(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </form>
  )
}

export default TodoForm
