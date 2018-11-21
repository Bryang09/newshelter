import React, { Component } from "react";

import axios from "axios";

import Nav from "../../Nav/Nav";
import DogMap from "./dogMap/dogMap";

import "./Dog.scss";

const API_KEY = "8b5f42ac4293d90c5c5cf549de61e57a";

class Dog extends Component {
  state = {
    list: false
  };

  componentDidMount = () => {
    const zip = this.props.match.params.zip;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=${API_KEY}&animal=dog&location=${zip}&count=100`
      )
      .then(res => this.setState({ list: res.data.petfinder.pets.pet }))
      .catch(err =>
        this.setState({ list: "There Was An Error Retrieving the Information" })
      );
  };

  render() {
    const zip = this.props.match.params.zip;

    return (
      <div className="Dog">
        <Nav color="#000" />
        <h1>
          Searching For Dogs Near <span>{zip}</span>
        </h1>

        {this.state.list === "There Was An Error Retrieving the Information" ? (
          <h1>{this.state.list}</h1>
        ) : this.state.list !== undefined && this.state.list !== false ? (
          <DogMap dogs={this.state.list} />
        ) : null}
      </div>
    );
  }
}

export default Dog;
