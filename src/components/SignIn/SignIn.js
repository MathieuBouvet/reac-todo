import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import UserForm from "../UserForm";
import validateUser from "../../utils/validateUser";
import ResponseNotification from "../ResponseNotification";
import SpinnerButton from "../SpinnerButton";
import useSendingRequest from "../../hooks/useSendingRequest";

const SignIn = ({ signInSuccessHandler }) => {
  const formSending = useSendingRequest()
    .post("http://localhost:3001/api/users/login")
    .onSuccess(signInSuccessHandler);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: validateUser,
    onSubmit: formSending.send,
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
      <SpinnerButton
        spin={formSending.loading}
        type="submit"
        className="submit-login"
      >
        Log In
      </SpinnerButton>
      {formSending.done && (
        <ResponseNotification
          error={formSending.error}
          closeHandler={formSending.reset}
          messageConfig={{
            on401: "Identifiants incorrects",
          }}
        />
      )}
    </form>
  );
};

SignIn.propTypes = {
  signInSuccessHandler: PropTypes.func.isRequired,
};

export default SignIn;
