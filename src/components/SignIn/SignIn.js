import React from "react";
import { useFormik } from "formik";
import UserForm from "../UserForm";
import useSendingForm from "../../utils/useSendingForm";
import validateUser from "../../utils/validateUser";
import ResponseNotification from "../ResponseNotification";
import SpinnerButton from "../SpinnerButton";

const SignIn = () => {
  const formSending = useSendingForm("http://localhost:3001/api/users/login");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: validateUser,
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
      <SpinnerButton spin type="submit" className="submit-login">
        Log In
      </SpinnerButton>
      {formSending.sent && (
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

export default SignIn;
