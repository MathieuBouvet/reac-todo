import React from "react";
import PropTypes from "prop-types";

class TodoList extends React.Component {
	static propTypes = {};
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
