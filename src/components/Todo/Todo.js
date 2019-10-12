import React from "react";
import PropTypes from "prop-types";

import "./Todo.css";

const Todo = ({ id, text, done, clickDone }) => (
	<li className={`todo ${done ? "done" : ""}`} onClick={() => clickDone(id)}>
		<button className="done-todo-btn">{`${done ? "✓" : " "}`}</button>
		<span className="todo-text">{text}</span>
		<button className="delete-todo-btn">✗</button>
	</li>
);
Todo.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
	clickDone: PropTypes.func.isRequired,
};

export default Todo;
