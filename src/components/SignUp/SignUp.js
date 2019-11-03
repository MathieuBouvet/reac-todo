import React from "react";
import { useFormik } from "formik";
import UserForm from "../UserForm";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <form className="form form-vertical" autoComplete="off">
      <UserForm
        usernameFields={formik.getFieldProps("username")}
        passwordFields={formik.getFieldProps("password")}
        errors={formik.errors}
        touched={formik.touched}
      />
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          type="password"
          id="confirmPassword"
          {...formik.getFieldProps("confirmPassword")}
        />
      </div>
    </form>
  );
};

export default SignUp;
