import React, { useState } from "react";
import UserForm from "../UserForm";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (event, from) => {
    if (from === "username") {
      setUsername(event.target.value);
    }
    if (from === "password") {
      setPassword(event.target.value);
    }
  };
  return (
    <form method="POST" action="">
      <UserForm
        username={username}
        password={password}
        changeHandler={handleChange}
      />
    </form>
  );
};

export default SignIn;
