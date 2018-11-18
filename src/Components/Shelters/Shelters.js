import React, { Component } from "react";

import axios from "axios";

import Nav from "../Nav/Nav";

const API_KEY = "8b5f42ac4293d90c5c5cf549de61e57a";

class Shelters extends Component {
  state = {
    zip: ""
  };

  componentDidMount = () => {
    const zip = this.props.match.params.zip;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?format=json&key=${API_KEY}&location=${zip}`
      )
      .then(res => console.log(res.data.petfinder.shelters.shelter))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props);
    return (
      <div className="Shelters">
        <Nav />
        <h1>Shelters</h1>
      </div>
    );
  }
}

export default Shelters;
