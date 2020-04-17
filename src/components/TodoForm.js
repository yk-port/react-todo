import React, { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

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
  const { addTodo } = useContext(TodosContext);
  const [ value, setValue ] = useState('');
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}>
      <TextField
        id="outlined-helperText"
        label="Enter Todo"
        variant="outlined"
        value={value}
        onChange={e => setValue(e.target.value)}
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
