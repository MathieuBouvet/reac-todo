import React from "react";
import shortid from "shortid";

import "./TodoList.css";
import logo from "../../assets/images/logo.svg";

import Todo from "../Todo";
import AddTodo from "../AddTodo";

import data from "../../utils/mockTodo";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			todosLoaded: false,
			addTodoValue: "",
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

	doneTodoClick = (e, todoId, type) => {
		e.preventDefault();
		e.stopPropagation();
		if (type === "done") {
			this.setState({
				todos: this.state.todos.map((elem) => {
					if (elem._id === todoId) {
						elem.done = true;
					}
					return elem;
				}),
			});
		} else if (type === "delete") {
			this.setState({
				todos: this.state.todos.filter((elem) => elem._id !== todoId),
			});
		}
	};

	addTodoValueChange = (e) => {
		this.setState({
			addTodoValue: e.target.value,
		});
	};

	createTodo = (e) => {
		this.setState({
			todos: [
				...this.state.todos,
				{
					_id: shortid.generate(),
					text: this.state.addTodoValue,
					done: false,
				},
			],
			addTodoValue: "",
		});
	};

	render() {
		return !this.state.todosLoaded ? (
			<div className="loading">
				<img className="loading-logo" src={logo} alt="loading" />
				<p> Loading...</p>
			</div>
		) : (
			<React.Fragment>
				<ul className="todos-loaded">
					{this.state.todos.map((todo) => (
						<Todo
							key={todo._id}
							id={todo._id}
							text={todo.text}
							done={todo.done}
							clicksTodo={this.doneTodoClick}
						/>
					))}
				</ul>
				<AddTodo
					addTodoValue={this.state.addTodoValue}
					changeValue={this.addTodoValueChange}
					addButtonClick={this.createTodo}
				/>
			</React.Fragment>
		);
	}
}

export default TodoList;
