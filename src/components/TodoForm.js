import React, { useState } from "react";
import '../../src/App.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group class="form-inline">
                <Form.Label><b>Create Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
            </Form.Group>
            <div style={{ display: 'block', margin: 'auto', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '25px' }}>
                <Button id="submit" variant="primary mb-3" type="submit" style={{ justifyContent: 'center' }}>
                    Submit
                </Button>
            </div>
        </Form >

    );
}


export default TodoForm;