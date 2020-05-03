import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { COMPLETE_TODO, DELETE_TODO } from '../actions'

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
  const { state, dispatch } = useContext(AppContext)
  const classes = useStyles()

  const completeTodo = id => {
    dispatch({ type: COMPLETE_TODO, id })
  }

  const deleteTodo = ({ id, label }) => {
    const result = window.confirm(`本当にラベル名：${label}を削除してもいいですか？`)
    if (result) dispatch({ type: DELETE_TODO, id })
  }

  return (
    <Grid item xs={12}>
      <List>
        {state && state.map((todo, index) => (
          <ListItem button key={index}>
            <ListItemText primary={todo.label} />
            <Button variant="outlined" size="small" color="default" className={classes.button} onClick={() => completeTodo(todo.id)}>
              {todo.complete ? 'done!!' : 'doning...'}
            </Button>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo)}>
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
