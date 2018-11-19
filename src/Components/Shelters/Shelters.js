import React, { Component } from "react";
import axios from "axios";

import Nav from "../Nav/Nav";
import ShelterMap from "./shelterMap/shelterMap";

import "./Shelters.scss";

const API_KEY = "8b5f42ac4293d90c5c5cf549de61e57a";

class Shelters extends Component {
  state = {
    zip: false
  };

  componentDidMount = () => {
    const zip = this.props.match.params.zip;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?format=json&key=${API_KEY}&location=${zip}`
      )
      .then(res => this.setState({ zip: res.data.petfinder.shelters.shelter }))
      .catch(err => console.log(err));
  };

  render() {
    const zip = this.props.match.params.zip;

    return (
      <div className="Shelters">
        <Nav />
        <h1>
          Searching for Shelters near <span>{zip}</span>
        </h1>
        {this.state.zip !== false ? (
          <ShelterMap shelters={this.state.zip} />
        ) : null}
      </div>
    );
  }
}

export default Shelters;
