import React from "react";

import TodoList from "../../components/TodoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"> Todo </header>
      <main className="App-body">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
