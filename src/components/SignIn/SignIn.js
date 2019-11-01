import React from "react";
import UserForm from "../UserForm";
import { useFormik } from "formik";

const validate = values => {};

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: values => {},
  });
  return (
    <form onSubmit={formik.onSubmit}>
      <UserForm
        username={formik.values.username}
        password={formik.values.password}
        changeHandler={formik.handleChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default SignIn;
