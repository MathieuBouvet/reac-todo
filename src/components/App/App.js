import React, { useState } from "react";

import TodoList from "../TodoList";
import Menu from "./Menu";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { Router, Link } from "@reach/router";

import "./App.css";
import "./forms.css";

function useAuthentication() {
  const [user, setUser] = useState({
    username: "",
    token: "",
  });
  return {
    ...user,
    isLoggedIn: () => user.username !== "" && user.token !== "",
    logIn: (username, token) => setUser({ username, token }),
    logOut: () => setUser({ username: "", token: "" }),
  };
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="app-title">
          Todo
        </Link>
        <Menu />
      </header>
      <main className="App-body">
        <Router>
          <TodoList path="/" />
          <SignIn path="login" />
          <SignUp path="signup" />
        </Router>
      </main>
    </div>
  );
}

export default App;
