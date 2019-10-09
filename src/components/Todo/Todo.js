import React from "react";
import PropTypes from "prop-types";

import "./Todo.css";

const Todo = ({ text, done }) => (
	<li className="todo">
		{text}
		{!done && <button>✓</button>}
	</li>
);
Todo.propTypes = {
	text: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
};

export default Todo;
