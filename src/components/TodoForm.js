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
                    <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={e => setValue(e.target.value)} placeholder="Add todo" style={{ width: "100%" }} autoFocus />
                </Grid>
                <Grid item alignItems="stretch" style={{ display: "flex", maxWidth: "100%" }} >
                    <Fab color="primary" type="submit" style={{ marginLeft: "15px", fontSize: "25px" }}>+</Fab>
                </Grid>
            </Grid>
        </form>

    );
}


export default TodoForm;