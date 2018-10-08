import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return <div>Hello world</div>;
  }
}

render(React.createElement(App), document.getElementById("root"));
