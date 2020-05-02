import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from '../actions'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = { label: action.label, complete: action.complete }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...todo }]
    case COMPLETE_TODO:
      const todos = [...state]
      todos[action.id - 1].complete = !todos[action.id - 1].complete
      return todos
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todoReducer
