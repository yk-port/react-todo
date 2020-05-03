import React, { createContext, useReducer } from 'react'
import todoReducer from '../reducers/todoReducer'

export const AppContext = createContext()

const AppContextProvider = props => {
  const [ state, dispatch ] = useReducer(todoReducer, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
