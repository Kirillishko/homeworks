import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const store = setupStore();

root.render(
    <Provider store={store} >
        <BrowserRouter >
            <ThemeProvider theme={theme} >
                <App />
            </ThemeProvider >
        </BrowserRouter >
    </Provider >
);
