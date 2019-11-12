import React, { useState } from "react";
import PropTypes from "prop-types";

import Todo from "../Todo";
import AddTodo from "../AddTodo";
import "./TodoList.css";

const TodoListDummy = ({ todoList, dispatch }) => {
  const [newTodoText, setNewTodoText] = useState("");
  return (
    <div className="todo-list">
      {!todoList.length && "Rien à faire ;)"}
      <ul className="todos-loaded">
        {todoList.map(todoItem => (
          <Todo
            key={todoItem._id || todoItem.tempId}
            id={todoItem._id || todoItem.tempId}
            done={todoItem.done}
            text={todoItem.text}
            onClickTodo={() =>
              dispatch({
                type: "COMPLETE_TODO",
                id: todoItem._id || todoItem.tempId,
              })
            }
            onClickDelete={() =>
              dispatch({
                type: "DELETE_TODO",
                id: todoItem._id || todoItem.tempId,
              })
            }
          />
        ))}
      </ul>
      <AddTodo
        addTodoValue={newTodoText}
        changeValue={e => setNewTodoText(e.target.value)}
        addButtonClick={() => dispatch({ type: "ADD_TODO", text: newTodoText })}
      />
    </div>
  );
};

TodoListDummy.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      clicksTodo: PropTypes.func.isRequired,
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default TodoListDummy;
