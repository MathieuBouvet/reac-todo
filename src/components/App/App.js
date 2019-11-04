import React, { useState } from "react";

import TodoList from "../TodoList";
import Menu from "./Menu";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { Router, Link } from "@reach/router";
import Button from "../Button";

import "./App.css";
import "./forms.css";

function useAuthentication() {
  const [user, setUser] = useState({
    username: localStorage.username || "",
    token: localStorage.token || "",
    id: localStorage.id || "",
  });
  return {
    ...user,
    isLoggedIn: user.username !== "" && user.token !== "" && user.id !== "",
    logIn: response => {
      const { username, token, user: id } = response.data;
      localStorage.username = username;
      localStorage.token = token;
      localStorage.id = id;
      setUser({ username, token, id });
    },
    logOut: () => setUser({ username: "", token: "", id: "" }),
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
          <TodoList path="/" />
          <SignIn path="login" signInSuccessHandler={user.logIn} />
          <SignUp path="signup" />
        </Router>
      </main>
    </div>
  );
}

export default App;
