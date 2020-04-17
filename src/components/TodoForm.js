import React, { useState } from 'react';

import {
  TextField,
  Button
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';

function TodoForm({ addTodo }) {
  const [ value, setValue ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  return (
    <form
      className={classes.root}
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
