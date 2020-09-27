import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./styles/index.css";

import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root") as HTMLElement
);

serviceWorker.unregister();
