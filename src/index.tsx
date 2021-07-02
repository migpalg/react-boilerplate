// @packages
import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

// @scripts
import { App, store } from "./core";
import reportWebVitals from "./reportWebVitals";

// @styles
import "./core/scss/globals.scss";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
