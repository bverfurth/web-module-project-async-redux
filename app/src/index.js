import App from "./App";
import React from "react";
import "./assets/css/main.css";
import thunk from "redux-thunk";
import logger from "redux-thunk";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
