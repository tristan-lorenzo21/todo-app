import React from "react";
// import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className="todo" >
            <Button variant="outline-success" onClick={() => completeTodo(index)} style={{ marginRight: "10px" }}>✓</Button>
            <span style={{ textDecoration: todo.isComplete ? "line-through" : "", textAlign: "left" }}>{todo.text}</span>
            <div>
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
            </div>
        </div>
    );
}

export default Todo;