import React, { Component } from "react";

import axios from "axios";

import Nav from "../../../Nav/Nav";
import Single from "./Single/Single";

const API_KEY = "8b5f42ac4293d90c5c5cf549de61e57a";

class IndividualDogs extends Component {
  state = {
    pet: false
  };

  componentDidMount = () => {
    const pet = this.props.match.params.id;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.get?format=json&key=${API_KEY}&id=${pet}`
      )
      .then(res => this.setState({ pet: res.data.petfinder.pet }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div
        className="Individual"
        style={
          this.state.pet && this.state.pet.animal.$t === "Cat"
            ? { background: "#640202" }
            : null
        }
      >
        <Nav />
        {this.state.pet !== false ? <Single pet={this.state.pet} /> : null}
      </div>
    );
  }
}

export default IndividualDogs;
