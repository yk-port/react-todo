import { combineReducers } from 'redux'

import todoReducer from './todoReducer'
import groupReducer from './groupReducer'

export default combineReducers({
  todoReducer,
  groupReducer
})
