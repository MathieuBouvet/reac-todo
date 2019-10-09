import React from "react";
import PropTypes from "prop-types";

import "./TodoList.css";
import logo from "../../assets/images/logo.svg";

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
			todosLoaded: false,
		};
	}

	render() {
		return !this.state.todosLoaded ? (
			<div className="loading">
				<img className="loading-logo" src={logo} alt="loading" />
				<p> Loading...</p>
			</div>
		) : (
			<div className="loaded"></div>
		);
	}
}

export default TodoList;
