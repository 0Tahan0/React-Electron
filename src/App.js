import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button, Container, Typography, Paper } from "@mui/material";
import { Home } from "@mui/icons-material";
import { mdiReact } from "@mdi/js";
import Icon from "@mdi/react";
function App() {
  const [counter, increase] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <Typography variant="h4" gutterBottom>
              Welcome to Electron + MUI
            </Typography>

            <Button
              variant="contained"
              color="primary"
              startIcon={<Home />}
              sx={{ mr: 2 }}
              onClick={() => increase((prev) => prev + 1)}
            >
              Counter : {counter}
            </Button>

            {typeof mdiAccount !== "undefined" && (
              <Icon path={mdiReact} size={1} color="primary" />
            )}
          </Paper>
        </Container>
      </header>
    </div>
  );
}

export default App;
