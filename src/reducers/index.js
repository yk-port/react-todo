import { combineReducers } from 'redux'

import todos from './todos'
import groups from './groups'

export default combineReducers({
  todos,
  groups
})
