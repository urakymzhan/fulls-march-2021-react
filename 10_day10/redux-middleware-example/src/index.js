import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pets from "./app/Pets";
import reportWebVitals from "./reportWebVitals";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Pets />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
