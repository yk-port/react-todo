import React, { createContext, useReducer } from 'react'
import todoReducer from '../reducers/todoReducer'

export const TodosContext = createContext()

const TodosContextProvider = props => {
  const [ state, dispatch ] = useReducer(todoReducer, [])

  // const removeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // }

  // const completeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].complete = !newTodos[index].complete;
  //   setTodos(newTodos);
  // }

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
