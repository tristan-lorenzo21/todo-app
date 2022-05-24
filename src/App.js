// import logo from './logo.svg';
import React, { useEffect, useState, useContext } from "react";
// import React, { useState } from "react";
import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([JSON.parse(localStorage.getItem('todos'))]);
  // const [todos, setTodos] = useState([{
  //   text: "Sample todo",
  //   isComplete: false
  // }]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos) {
      setTodos(storedTodos);
    }

    setTodos(storedTodos);

    console.log(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List App</h1>
        <h1 className="todo-list">

        </h1>

        <TodoForm addTodo={addTodo} />
        <div className="todo-list">
          {todos != null && todos.length > 0 ? todos.map((todo, index) => (
            <Card style={{ marginTop: "10px" }}>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          )) : <div> No todos </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
