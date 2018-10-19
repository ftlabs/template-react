import React from "react";
import { hydrate } from "react-dom";

class App extends React.Component {
  render() {
    return <div>Hello world</div>;
  }
}

hydrate(React.createElement(App), document.getElementById("root"));
