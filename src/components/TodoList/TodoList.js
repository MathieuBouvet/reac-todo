import React from "react";
import PropTypes from "prop-types";

class TodoList extends React.Component {
	static propTypes = {
		todos: PropTypes.arrayOf(
			PropTypes.shape({
				_id: PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				done: PropTypes.bool.isRequired,
			}).isRequired
		),
		todosLoaded: PropTypes.bool,
	};
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
	}

	render() {
		return <div className="todo-list"></div>;
	}
}

export default TodoList;
