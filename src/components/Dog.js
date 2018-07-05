import React, { Component } from "react";
// import ScrollMagic from "./ScrollMagic"; // my own wrapper for scrollmagic that includes greensock
// import Sticky from "./Sticky";
import { Motion, spring } from "react-motion";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      showMotion: false
    };
  }

  render() {
    return (
      <Motion
        // setting initial default Style
        defaultStyle={{ x: -200, opacity: 0 }}
        //setting what we'd like to happen when motion occurs
        style={{
          x: spring(this.state.showMotion ? 0 : -200),
          opacity: spring(this.state.showMotion ? 1 : 0)
        }}
      >
        {/* style represents style from motion Component */}
        {style => {
          return (
            <div style={{ position: "fixed" }}>
              <div
                style={{
                  opacity: style.opacity,
                  transform: `translateX(${style.x}px`
                }}
              >
                <img
                  src="https://short-funny.com/dog-jokes.jpg"
                  alt="funny dog"
                />
              </div>
              <button
                onClick={() =>
                  this.setState({ showMotion: !this.state.showMotion })
                }
              >
                Click Me Please
              </button>
              <div
                style={{
                  opacity: style.opacity,
                  transform: `translateX(${style.x + 100}px`
                }}
              >
                <img
                  src="https://short-funny.com/dog-jokes.jpg"
                  alt="funny dog"
                />
              </div>
              <div
                style={{
                  opacity: style.opacity,
                  transform: `translateX(${style.x + 200}px`
                }}
              >
                <img
                  src="https://short-funny.com/dog-jokes.jpg"
                  alt="funny dog"
                />
              </div>
              <div
                style={{
                  opacity: style.opacity,
                  transform: `translateX(${style.x + 300}px`
                }}
              >
                <img
                  src="https://short-funny.com/dog-jokes.jpg"
                  alt="funny dog"
                />
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
