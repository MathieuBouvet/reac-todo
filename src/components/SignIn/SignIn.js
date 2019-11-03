import React from "react";
import { useFormik } from "formik";
import UserForm from "../UserForm";
import useSendingForm from "../../utils/useSendingForm";
import FormNotification from "../FormNotification";
import Button from "../Button";

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
  const formSending = useSendingForm("http://localhost:3001/api/users/login");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: formSending.submitHandler,
  });
  return (
    <form
      className="form form-vertical login-form"
      onSubmit={formik.handleSubmit}
    >
      <UserForm
        usernameFields={formik.getFieldProps("username")}
        passwordFields={formik.getFieldProps("password")}
        errors={formik.errors}
        touched={formik.touched}
      />
      <Button type="submit">Log In</Button>
      {formSending.sent && (
        <FormNotification
          error={formSending.error}
          closeHandler={formSending.reset}
        />
      )}
    </form>
  );
};

export default SignIn;
