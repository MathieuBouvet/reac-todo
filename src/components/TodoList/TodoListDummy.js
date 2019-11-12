import React from "react";
import PropTypes from "prop-types";

import Todo from "../Todo";
import "./TodoList.css";

const TodoListDummy = ({ todoList }) => (
  <div className="todo-list">
    {!todoList.length && "Rien à faire ;)"}
    <ul className="todos-loaded">
      {todoList.map(todoItem => (
        <Todo {...todoItem} />
      ))}
    </ul>
  </div>
);

TodoListDummy.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      clicksTodo: PropTypes.func.isRequired,
    })
  ).isRequired,
};
export default TodoListDummy;
