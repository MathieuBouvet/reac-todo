import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import "./Todo.css";

const Todo = ({ id, text, done, onClickDelete, onClickTodo }) => {
  const [willBeRemoved, setWillBeRemoved] = useState(false);
  return (
    <li
      className={`todo ${done ? "done" : ""} ${
        willBeRemoved ? "will-be-removed" : ""
      }`}
      onClick={() => onClickTodo()}
      onAnimationEnd={e => {
        if (willBeRemoved && e.animationName === "leave-slide") {
          onClickDelete();
        }
      }}
    >
      <button className="done-todo-btn">{`${done ? "✓" : " "}`}</button>
      <span className="todo-text">{text}</span>
      <Button
        primaryColor="orange"
        className="delete-todo-btn"
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
          setWillBeRemoved(true);
        }}
      >
        ✗
      </Button>
    </li>
  );
};
Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickTodo: PropTypes.func.isRequired,
};

export default Todo;
