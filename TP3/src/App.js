import React, { Component } from "react";
import "./styles.css";
import CardRobot from "./CardRobot";
import State from "./data.js";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <CardRobot />
      </div>
    );
  }
}
