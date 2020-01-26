import React, { useState } from "react";
import { navigate } from "@reach/router";
import Menu from "./Menu";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { Router, Link } from "@reach/router";
import Button from "../Button";
import TodoList from "../TodoList/TodoListContainer";

import "./App.css";
import "./forms.css";

function useAuthentication() {
  const [user, setUser] = useState({
    username: localStorage.username || "",
    csrfToken: localStorage.csrfToken || "",
    id: localStorage.id || "",
  });
  return {
    ...user,
    isLoggedIn: user.username !== "" && user.csrfToken !== "" && user.id !== "",
    logIn: response => {
      const { username, csrfToken, user: id } = response.data;
      localStorage.username = username;
      localStorage.csrfToken = csrfToken;
      localStorage.id = id;
      setUser({ username, csrfToken, id });
      navigate("/");
    },
    logOut: () => {
      localStorage.username = "";
      localStorage.csrfToken = "";
      localStorage.id = "";
      setUser({ username: "", csrfToken: "", id: "" });
      navigate("/");
    },
  };
}

function App() {
  const user = useAuthentication();
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="app-title">
          Todo
        </Link>
        {user.isLoggedIn ? (
          <>
            <span style={{ marginRight: "15px" }}>{user.username}</span>{" "}
            <Button onClick={user.logOut}> Log Out </Button>
          </>
        ) : (
          <Menu />
        )}
      </header>
      <main className="App-body">
        <Router>
          <TodoList path="/" user={user} />
          <SignIn path="login" signInSuccessHandler={user.logIn} />
          <SignUp path="signup" />
        </Router>
      </main>
    </div>
  );
}

export default App;
