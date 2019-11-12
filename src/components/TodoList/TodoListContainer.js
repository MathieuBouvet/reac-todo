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
      return action.newList.map(todoElem => {
        const { _id: id, ...rest } = todoElem;
        return { id, ...rest };
      });
    default:
      return state;
  }
};

const TodoListContainer = ({ user }) => {
  const [todoList, dispatch] = useReducer(todoListReducer, []);
  const userRequest = useSendingRequest()
    .get(`http://localhost:3001/api/users/${user.id}`)
    .bearer(user.token)
    .onSuccess(response => {
      dispatch({ type: "LOAD_LIST", newList: response.data.todos });
    });

  useEffect(userRequest.send, []);

  return <TodoList todoList={todoList} dispatch={dispatch} />;
};

TodoListContainer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoListContainer;
