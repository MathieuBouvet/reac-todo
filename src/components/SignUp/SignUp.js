import React from "react";
import { useFormik } from "formik";
import useSendingForm from "../../utils/useSendingForm";
import UserForm from "../UserForm";
import validateUser from "../../utils/validateUser";
import Button from "../Button";
import ResponseNitification from "../ResponseNotification";

const SignUp = () => {
  const formSending = useSendingForm(
    "http://localhost:3001/api/users",
    response => console.log(response),
    error => console.log(error),
    ["username", "password"]
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
    onSubmit: formSending.submitHandler,
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
      <Button type="submit">Sign Up</Button>
      {formSending.sent && (
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
