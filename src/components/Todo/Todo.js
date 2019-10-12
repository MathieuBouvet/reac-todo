import React from "react";
import PropTypes from "prop-types";

import "./Todo.css";

const Todo = ({ id, text, done, clicksTodo }) => (
	<li
		className={`todo ${done ? "done" : ""}`}
		onClick={(e) => clicksTodo(e, id, "done")}
	>
		<button className="done-todo-btn">{`${done ? "✓" : " "}`}</button>
		<span className="todo-text">{text}</span>
		<button
			className="delete-todo-btn"
			onClick={(e) => clicksTodo(e, id, "delete")}
		>
			✗
		</button>
	</li>
);
Todo.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
	clicksTodo: PropTypes.func.isRequired,
};

export default Todo;
