import {
  ADD_GROUP,
  EDIT_GROUP,
  SELECT_GROUP,
  DELETE_GROUP
} from '../actions'

const groups = (state = [], action) => {
  switch (action.type) {
    case ADD_GROUP:
      return state
    case EDIT_GROUP:
      return state
    case SELECT_GROUP:
      return state
    case DELETE_GROUP:
      return state
    default:
      return state
  }
}

export default groups
