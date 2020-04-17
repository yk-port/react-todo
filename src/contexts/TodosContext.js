import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [ todos, setTodos ] = useState([]);

  const addTodo = text =>  {
    const newTodos = [...todos, { text, complete: false }];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, completeTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
