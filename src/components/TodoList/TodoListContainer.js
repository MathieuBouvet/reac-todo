import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import TodoList from "./TodoListDummy";
import useSendingRequest from "../../hooks/useSendingRequest";

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
    case "LOAD_LIST":
      return action.newList;
    default:
      return state;
  }
};

const TodoListContainer = ({ user }) => {
  const [todoList, dispatch] = useReducer(todoListReducer, []);
  const userRequest = useSendingRequest()
    .get(`http://localhost:3001/api/users/${user.id}`)
    .onSuccess(response => {
      const newList = response.data.todos.map(todoItem => {
        const { _id: id, ...rest } = todoItem;
        return { id, ...rest };
      });
      dispatch({ type: "LOAD_LIST", newList });
    });

  const saveRequest = useSendingRequest()
    .put(`http://localhost:3001/api/users/${user.id}/todos`)
    .headers({ "x-csrf-token": user.csrfToken })
    .onSuccess(response => {
      console.log("saved");
    });

  useEffect(userRequest.send, [user.id, user.token]);

  return (
    <TodoList
      todoList={todoList}
      dispatch={dispatch}
      saveTodoList={() => saveRequest.send(todoList)}
    />
  );
};

TodoListContainer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoListContainer;
