import React, { Component } from "react";

import Form from "./Form/Form";
import Pets from "./Pets/Pets";
import Nav from "../Nav/Nav";

import "./Landing.scss";

class Landing extends Component {
  state = {
    input: ""
  };

  onZip = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div className="Landing">
        <Nav page={this.props.match.path} />
        <div className="landingText">
          <h1>Bryan's Shelters</h1>
          <h3>
            Interested in Adopting? Just want to look around? Regardless, we're
            glad to have you here! To begin, Please type in your Zip Code and we
            will find animal shelters near you!
          </h3>
          <Form change={this.onZip} zip={this.state.input} />
          <Pets />
        </div>
        <div className="landingImg">
          <div className="LandingImg" />
        </div>
      </div>
    );
  }
}

export default Landing;
