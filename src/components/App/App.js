import React from "react";

import TodoList from "../../components/TodoList";
import Menu from "./Menu";
import SignIn from "../SignIn";
import { Router, Link } from "@reach/router";

import "./App.css";

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
        </Router>
      </main>
    </div>
  );
}

export default App;
