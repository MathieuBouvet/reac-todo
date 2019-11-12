import React from "react";
import PropTypes from "prop-types";

import Todo from "../Todo";
import "./TodoList.css";

const TodoListDummy = ({ todoList }) => (
  <div className="todo-list">
    {!todoList.length && "Rien à faire ;)"}
    <ul className="todos-loaded">
      {todoList.map(todoItem => (
        <Todo
          key={todoItem._id || todoItem.tempId}
          id={todoItem._id || todoItem.tempId}
          done={todoItem.done}
          text={todoItem.text}
        />
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
