import React, { Component } from "react";

import Nav from "../Nav/Nav";
import Hero from "./Hero/Hero";

import "./Dogs.scss";

class Dogs extends Component {
  state = {
    zip: false
  };

  onZip = e => {
    e.preventDefault();
    this.setState({ zip: e.target.value });
  };
  render() {
    return (
      <div className="Dogs">
        <Nav />
        <Hero change={this.onZip} zip={this.state.zip} />
      </div>
    );
  }
}

export default Dogs;
