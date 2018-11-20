import React, { Component } from "react";

import axios from "axios";

import Nav from "../../Nav/Nav";
import CatMap from "./catMap/catMap";

const API_KEY = "8b5f42ac4293d90c5c5cf549de61e57a";

class Cat extends Component {
  state = {
    list: false
  };
  componentDidMount = () => {
    const zip = this.props.match.params.zip;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=${API_KEY}&animal=cat&location=${zip}&count=100`
      )
      .then(res => this.setState({ list: res.data.petfinder.pets.pet }))
      .catch(err => console.log(err));
  };

  render() {
    const zip = this.props.match.params.zip;

    return (
      <div className="Dog">
        <Nav />
        <h1>
          Searching For Cats Near <span>{zip}</span>
        </h1>
        {this.state.list !== false ? (
          <CatMap cats={this.state.list} />
        ) : (
          <h1>Please Wait While We Fetch The Results</h1>
        )}
      </div>
    );
  }
}

export default Cat;
