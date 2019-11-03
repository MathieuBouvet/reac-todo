import React from "react";
import { useFormik } from "formik";
import UserForm from "../UserForm";
import validateUser from "../../utils/validateUser";
import Button from "../Button";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate: values => {
      const errors = validateUser(values);
      if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Must match password";
      }
      return errors;
    },
  });
  const confirmPasswordError = () =>
    formik.errors.confirmPassword &&
    (formik.touched.password || formik.touched.confirmPassword);
  return (
    <form className="form form-vertical">
      <UserForm
        usernameFields={formik.getFieldProps("username")}
        passwordFields={formik.getFieldProps("password")}
        errors={formik.errors}
        touched={formik.touched}
      />
      <div
        className={`form-group ${confirmPasswordError() ? "has-error" : ""}`}
      >
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          type="password"
          id="confirmPassword"
          {...formik.getFieldProps("confirmPassword")}
        />
        {confirmPasswordError() && (
          <div className="form-group-error">
            {formik.errors.confirmPassword}
          </div>
        )}
      </div>
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUp;
