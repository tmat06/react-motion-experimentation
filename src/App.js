import React, { Component } from "react";
import Dog from "./components/Dog";
import "./App.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      showMotion: false
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <Dog showMotion={this.state.showMotion} />
        </div>
      </div>
    );
  }
}
