import React from "react";
import PropTypes from "prop-types";

const UserForm = ({ username, password, changeHandler }) => (
  <>
    <label htmlFor="username">Username :</label>
    <input
      type="text"
      name="username"
      id="username"
      value={username}
      onChange={e => changeHandler(e, "username")}
    />
    <label htmlFor="password">Password :</label>
    <input
      type="password"
      name="password"
      id="password"
      value={password}
      onChange={e => changeHandler(e, "password")}
    />
  </>
);
UserForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
export default UserForm;
