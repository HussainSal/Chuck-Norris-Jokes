import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppWrapper } from "./store/contextApi";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
