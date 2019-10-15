import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Todo.css";

const Todo = ({ id, text, done, clicksTodo }) => {
  const [willBeRemoved, setWillBeRemoved] = useState(false);
  return (
    <li
      className={`todo ${done ? "done" : ""} ${
        willBeRemoved ? "will-be-removed" : ""
      }`}
      onClick={(e) => clicksTodo(e, id, "done")}
      onAnimationEnd={(e) => {
        if (willBeRemoved && e.animationName === "leave-slide") {
          clicksTodo(e, id, "delete");
        }
      }}
    >
      <button className="done-todo-btn">{`${done ? "✓" : " "}`}</button>
      <span className="todo-text">{text}</span>
      <button
        className="delete-todo-btn"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setWillBeRemoved(true);
        }}
      >
        ✗
      </button>
    </li>
  );
};
Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  clicksTodo: PropTypes.func.isRequired
};

export default Todo;
