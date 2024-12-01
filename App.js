import React from 'react';
import './App.css';
import TodoList from './Components/Todolist';

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <p>Todo list</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
