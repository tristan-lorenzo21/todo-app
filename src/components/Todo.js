import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkbox from "@mui/material/Checkbox";

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className="todo" >
            <Checkbox color="success" onClick={() => completeTodo(index)} />
            <span style={{ textDecoration: todo.isComplete ? "line-through" : "", textAlign: "left", maxWidth: "200px" }}>{todo.text}</span>
            <div>
                <Button variant="outline-danger" onClick={() => removeTodo(index)} style={{ marginRight: "10px" }}>✕</Button>
            </div>
        </div>
    );
}

export default Todo;