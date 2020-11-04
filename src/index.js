import React from "react";
import ReactDOM from "react-dom";

import Pizza from "./Pizza";

import "./styles.css";

function App() {
  return (
    <div className="App centered column">
      <Pizza />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
