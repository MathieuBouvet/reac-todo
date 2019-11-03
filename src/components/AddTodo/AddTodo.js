import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import "./AddTodo.css";

const AddTodo = ({ addTodoValue, changeValue, addButtonClick }) => (
  <div className="add-todo">
    <input
      className="add-todo-input"
      type="text"
      value={addTodoValue}
      onChange={e => changeValue(e)}
    />
    <Button
      primaryColor="green"
      className="add-todo-btn"
      onClick={e => addButtonClick(e)}
    >
      ＋
    </Button>
  </div>
);

AddTodo.propTypes = {
  addTodoValue: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  addButtonClick: PropTypes.func.isRequired,
};

export default AddTodo;
