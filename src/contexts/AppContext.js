import React, { createContext, useReducer } from 'react'
import reducer from '../reducers'

export const AppContext = createContext()

const AppContextProvider = props => {
  const initialState = {
    groups: [],
    selectedGroup: 1,
    todos: [],
  }
  const [ state, dispatch ] = useReducer(reducer, initialState)

  console.log(state)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
