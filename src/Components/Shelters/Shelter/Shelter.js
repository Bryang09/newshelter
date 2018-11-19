import React, { Component } from "react";

import axios from "axios";

import Nav from "../../Nav/Nav";
import PetMap from "./petMap/petMap";

import "./Shelter.scss";

const API_KEY = "8b5f42ac4293d90c5c5cf549de61e57a";

class Shelter extends Component {
  state = {
    results: false
  };
  componentDidMount = () => {
    const id = this.props.match.params.id;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.getPets?format=json&key=${API_KEY}&id=${id}&count=50`
      )
      .then(res => this.setState({ results: res.data.petfinder.pets.pet }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.results);
    console.log(this.props);
    console.log(this.props.match.params.id);
    return (
      <div className="Shelter">
        <Nav />
        {this.state.results !== false ? (
          <PetMap pets={this.state.results} />
        ) : null}
      </div>
    );
  }
}

export default Shelter;
