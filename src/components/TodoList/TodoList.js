import React from "react";
import shortid from "shortid";

import "./TodoList.css";
import logo from "../../assets/images/logo.svg";

import Todo from "../Todo";
import AddTodo from "../AddTodo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(window.localStorage.getItem("todoList")) || [],
      todosLoaded: true,
      addTodoValue: "",
    };
  }

  doneTodoClick = (e, todoId, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (type === "done") {
      this.setState(
        {
          todos: this.state.todos.map(elem => {
            if (elem._id === todoId) {
              elem.done = true;
            }
            return elem;
          }),
        },
        () => {
          window.localStorage.setItem(
            "todoList",
            JSON.stringify(this.state.todos)
          );
        }
      );
    } else if (type === "delete") {
      this.setState(
        {
          todos: this.state.todos.filter(elem => elem._id !== todoId),
        },
        () => {
          window.localStorage.setItem(
            "todoList",
            JSON.stringify(this.state.todos)
          );
        }
      );
    }
  };

  addTodoValueChange = e => {
    this.setState({
      addTodoValue: e.target.value,
    });
  };

  createTodo = e => {
    this.setState(
      {
        todos: [
          ...this.state.todos,
          {
            _id: shortid.generate(),
            text: this.state.addTodoValue,
            done: false,
          },
        ],
        addTodoValue: "",
      },
      () => {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify(this.state.todos)
        );
      }
    );
  };

  render() {
    return !this.state.todosLoaded ? (
      <div className="loading">
        <img className="loading-logo" src={logo} alt="loading" />
        <p> Loading...</p>
      </div>
    ) : (
      <React.Fragment>
        {!this.state.todos.length && "Rien à faire ;)"}
        <ul className="todos-loaded">
          {this.state.todos.map(todo => (
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
