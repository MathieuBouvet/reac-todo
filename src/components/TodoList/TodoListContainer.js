import React, { useReducer } from "react";
import shortid from "shortid";

import TodoList from "./TodoListDummy";

const todoListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: shortid.generate(), text: action.text, done: false },
      ];
    case "DELETE_TODO":
      return state.filter(todoItem => action.id !== todoItem.id);
    case "COMPLETE_TODO":
      return state.map(todoItem => {
        const newTodoItem = { ...todoItem };
        if (action.id === newTodoItem.id) {
          newTodoItem.done = true;
        }
        return newTodoItem;
      });
    default:
      return state;
  }
};

const TodoListContainer = () => {
  const [todoList, dispatch] = useReducer(todoListReducer, []);

  return <TodoList todoList={todoList} dispatch={dispatch} />;
};

export default TodoListContainer;
