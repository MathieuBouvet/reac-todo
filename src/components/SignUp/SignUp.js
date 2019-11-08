import React from "react";
import { useFormik } from "formik";
import useSendingRequest from "../../hooks/useSendingRequest";
import UserForm from "../UserForm";
import validateUser from "../../utils/validateUser";
import SpinnerButton from "../SpinnerButton";
import ResponseNitification from "../ResponseNotification";

const SignUp = () => {
  const formSending = useSendingRequest().post(
    "http://localhost:3001/api/users"
  );
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
    onSubmit: formSending.send,
  });
  const confirmPasswordError = () =>
    formik.errors.confirmPassword &&
    (formik.touched.password || formik.touched.confirmPassword);
  return (
    <form className="form form-vertical" onSubmit={formik.handleSubmit}>
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
      <SpinnerButton
        spin={formSending.loading}
        type="submit"
        className="submit-signup"
      >
        Sign Up
      </SpinnerButton>
      {formSending.done && (
        <ResponseNitification
          error={formSending.error}
          closeHandler={formSending.reset}
          messageConfig={{
            on400: `${formik.values.username} est déjà pris`,
          }}
        />
      )}
    </form>
  );
};

export default SignUp;
