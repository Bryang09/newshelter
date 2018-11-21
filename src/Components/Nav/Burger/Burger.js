import React, { Component } from "react";

import "./Burger.scss";

class Burger extends Component {
  render() {
    return (
      <div
        className="BurgerNav"
        onClick={this.props.click}
        style={this.props.burger ? { background: "none" } : null}
      >
        <div
          className="btn"
          style={
            this.props.burger
              ? { transform: "translateY(15px)" }
              : { background: `${this.props.color}`, marginTop: "5px" }
          }
        />
        <div
          className="btn"
          style={
            this.props.burger
              ? { transform: "translateX(-100vw)", color: "#fff" }
              : { background: `${this.props.color}` }
          }
        />
        <div
          className="btn"
          style={
            this.props.burger
              ? { transform: "rotate(90deg)", color: "#fff" }
              : { background: `${this.props.color}` }
          }
        />
      </div>
    );
  }
}

export default Burger;
