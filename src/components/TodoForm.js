import React, { useState } from "react";
import '../../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";

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
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item>
                    <TextField fullWidth id="outlined-basic" label="Add todo" variant="outlined" value={value} onChange={e => setValue(e.target.value)} style={{ width: "100%" }} autoFocus />
                </Grid>
                <Grid item alignItems="stretch" style={{ display: "flex", maxWidth: "100%" }} >
                    <Fab color="primary" type="submit" style={{ marginLeft: "10px", fontSize: "25px", transform: "scale(0.8)" }}>+</Fab>
                </Grid>
            </Grid>
        </form>

    );
}


export default TodoForm;