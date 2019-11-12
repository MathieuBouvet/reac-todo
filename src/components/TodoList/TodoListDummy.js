import React from "react";
import PropTypes from "prop-types";

const TodoListDummy = ({ todoList }) => <div></div>;

TodoListDummy.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      clicksTodo: PropTypes.func.isRequired,
    })
  ).isRequired,
};
export default TodoListDummy;
