import React, { useReducer } from "react";
import shortid from "shortid";

import TodoList from "./TodoListDummy";

const todoListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { tempId: shortid.generate(), text: action.text, done: false },
      ];
    default:
      return state;
  }
};

const TodoListContainer = () => {
  const [todoList, dispatch] = useReducer(
    todoListReducer,
    JSON.parse(window.localStorage.getItem("todoList")) || []
  );

  return <TodoList todoList={todoList} dispatch={dispatch} />;
};

export default TodoListContainer;
