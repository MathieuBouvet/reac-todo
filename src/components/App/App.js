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
    id: "",
  });
  return {
    ...user,
    isLoggedIn: user.username !== "" && user.token !== "" && user.id !== "",
    logIn: response => {
      const { username, token, user: id } = response.data;
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
        {!user.isLoggedIn && <Menu />}
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
