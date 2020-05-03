import React, { createContext, useReducer } from 'react'
import todoReducer from '../reducers/todoReducer'

export const TodosContext = createContext()

const TodosContextProvider = props => {
  const [ state, dispatch ] = useReducer(todoReducer, [])

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
