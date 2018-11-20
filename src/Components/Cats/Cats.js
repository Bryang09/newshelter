import React, { Component } from "react";

import Nav from "../Nav/Nav";
import Hero from "./Hero/Hero";

class Cats extends Component {
  state = {
    zip: false
  };

  onZip = e => {
    e.preventDefault();
    this.setState({ zip: e.target.value });
  };
  render() {
    return (
      <div className="Cats">
        <Nav />
        <Hero change={this.onZip} zip={this.state.zip} />
      </div>
    );
  }
}

export default Cats;
