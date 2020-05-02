import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from '../actions'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state
    case COMPLETE_TODO:
      return state
    case DELETE_TODO:
      return state
    default:
      return state
  }
}

export default todoReducer
