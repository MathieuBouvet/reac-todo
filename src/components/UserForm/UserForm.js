import React from "react";
import PropTypes from "prop-types";

const UserForm = ({ usernameFields, passwordFields, errors, touched }) => (
  <>
    <div className="form-group">
      <label htmlFor="username">Username :</label>
      <input type="text" id="username" {...usernameFields} />
      {touched.username && errors.username && (
        <div className="form-group-error">{errors.username}</div>
      )}
    </div>
    <div className="form-group">
      <label htmlFor="password">Password :</label>
      <input type="password" id="password" {...passwordFields} />
      {touched.password && errors.password && (
        <div className="form-group-error">{errors.password}</div>
      )}
    </div>
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
