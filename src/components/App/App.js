import React from "react";

import TodoList from "../../components/TodoList";
import Menu from "./Menu";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo <Menu />
      </header>
      <main className="App-body">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
