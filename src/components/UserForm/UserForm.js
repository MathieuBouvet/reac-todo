import React from "react";
import PropTypes from "prop-types";

const UserForm = ({ username, password }) => (
  <>
    <label htmlFor="username">Username :</label>
    <input type="text" name="username" id="username" value={username} />
    <label htmlFor="password">Password :</label>
    <input type="password" name="password" id="password" value={password} />
  </>
);
UserForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
export default UserForm;
