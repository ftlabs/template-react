import React from "react";
import { hydrate } from "react-dom";
import App from "./App.js";

hydrate(React.createElement(App), document.getElementById("root"));
