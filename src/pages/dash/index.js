

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import App1 from "App";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App1 />
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
