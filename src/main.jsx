import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";
import { Buffer } from "buffer";
window.Buffer = Buffer; // Polyfill Buffer for browser


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
