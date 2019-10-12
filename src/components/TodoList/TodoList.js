import React from "react";

import "./TodoList.css";
import logo from "../../assets/images/logo.svg";

import Todo from "../Todo";

import data from "../../utils/mockTodo";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			todosLoaded: false,
		};
	}
	componentDidMount() {
		// TODO : consume API
		setTimeout(() => {
			this.setState({
				todos: data,
				todosLoaded: true,
			});
		}, 2500);
	}

	render() {
		return !this.state.todosLoaded ? (
			<div className="loading">
				<img className="loading-logo" src={logo} alt="loading" />
				<p> Loading...</p>
			</div>
		) : (
			<ul className="todos-loaded">
				{this.state.todos.map((todo) => (
					<Todo key={todo._id} text={todo.text} done={todo.done} />
				))}
			</ul>
		);
	}
}

export default TodoList;
