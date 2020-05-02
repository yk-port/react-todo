import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from '../actions'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = {
        label: action.label,
        complete: action.complete
      }
      const length = state.length
      const id = length === 0 ? 1 : state[length].id + 1
      return [...state, { id, ...todo }]
    case COMPLETE_TODO:
      return state
    case DELETE_TODO:
      return state
    default:
      return state
  }
}

export default todoReducer
