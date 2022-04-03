import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTopProvider } from "./providers/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTopProvider>
        <App />
      </ScrollToTopProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
