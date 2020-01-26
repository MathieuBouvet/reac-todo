import React, { useState } from "react";
import PropTypes from "prop-types";

import Todo from "../Todo";
import AddTodo from "../AddTodo";
import Button from "../Button";
import "./TodoList.css";

const TodoListDummy = ({ todoList, dispatch, saveTodoList }) => {
  const [newTodoText, setNewTodoText] = useState("");
  return (
    <div className="todo-list">
      {!todoList.length && "Rien à faire ;)"}
      <ul className="todos-loaded">
        {todoList.map(todoItem => (
          <Todo
            key={todoItem.id}
            id={todoItem.id}
            done={todoItem.done}
            text={todoItem.text}
            onClickTodo={() =>
              dispatch({
                type: "COMPLETE_TODO",
                id: todoItem.id,
              })
            }
            onClickDelete={() =>
              dispatch({
                type: "DELETE_TODO",
                id: todoItem.id,
              })
            }
          />
        ))}
      </ul>
      <AddTodo
        addTodoValue={newTodoText}
        changeValue={e => setNewTodoText(e.target.value)}
        addButtonClick={() => {
          setNewTodoText("");
          dispatch({ type: "ADD_TODO", text: newTodoText });
        }}
      />
      <Button onClick={saveTodoList}>Sauvegarder</Button>
    </div>
  );
};

TodoListDummy.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default TodoListDummy;
