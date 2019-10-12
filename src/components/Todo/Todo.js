import React from "react";
import PropTypes from "prop-types";

import "./Todo.css";

const Todo = ({ text, done }) => (
	<li className="todo">
		{!done && <button class="done-todo-btn">✓</button>}
		{text}
		<button class="delete-todo-btn">✗</button>
	</li>
);
Todo.propTypes = {
	text: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
};

export default Todo;
