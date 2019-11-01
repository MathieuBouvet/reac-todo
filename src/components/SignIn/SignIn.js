import React from "react";
import UserForm from "../UserForm";
import useSendingForm from "../../utils/useSendingForm";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username Required";
  }
  if (!values.password) {
    errors.password = "Password Required";
  }
  return errors;
};

const SignIn = () => {
  const formik = useSendingForm(
    {
      initialValues: {
        username: "",
        password: "",
      },
      validate,
    },
    "the route"
  );
  return (
    <form onSubmit={formik.handleSubmit}>
      <UserForm
        usernameFields={formik.getFieldProps("username")}
        passwordFields={formik.getFieldProps("password")}
        errors={formik.errors}
        touched={formik.touched}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default SignIn;
