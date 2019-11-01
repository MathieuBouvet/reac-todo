import React from "react";
import PropTypes from "prop-types";

const UserForm = ({ usernameFields, passwordFields, errors, touched }) => (
  <>
    <label htmlFor="username">Username :</label>
    <input type="text" id="username" {...usernameFields} />
    {touched.username && errors.username && <div>{errors.username}</div>}
    <label htmlFor="password">Password :</label>
    <input type="password" id="password" {...passwordFields} />
    {touched.password && errors.password && <div>{errors.password}</div>}
  </>
);
const fieldPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
});
UserForm.propTypes = {
  usernameFields: fieldPropType,
  passwordFields: fieldPropType,
  errors: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  touched: PropTypes.shape({
    username: PropTypes.bool,
    password: PropTypes.bool,
  }),
};
export default UserForm;
