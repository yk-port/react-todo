import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  makeStyles
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function TodoList() {
  const { todos, completeTodo, removeTodo } = useContext(TodosContext);
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <List>
        {todos && todos.map((todo, index) => (
          <ListItem button key={index}>
            <ListItemText primary={todo.text} />
            <Button variant="outlined" size="small" color="default" className={classes.button} onClick={() => completeTodo(index)}>
              {todo.complete ? 'done!!' : 'doning...'}
            </Button>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Grid>
  )
}

export default TodoList
