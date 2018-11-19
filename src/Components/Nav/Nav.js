import React, { Component } from "react";

import "./Nav.scss";

import { NavLink } from "react-router-dom";

import Search from "./Search/Search";

class Nav extends Component {
  state = {
    zip: ""
  };

  onZip = e => {
    e.preventDefault();
    this.setState({ zip: e.target.value });
  };
  render() {
    return (
      <div className="Nav">
        <div
          className="navTitle"
          style={
            this.props.page === "/" ? { backgroundColor: "#272727" } : null
          }
        >
          <h2>
            <NavLink to="/" exact activeClassName="active">
              Bryan's Shelters
            </NavLink>
          </h2>
        </div>
        <div
          className="Navigation"
          style={
            this.props.page === "/" ? { backgroundColor: "#df97ae" } : null
          }
        >
          <h4>
            <NavLink to="/dogs" activeClassName="active">
              Dogs
            </NavLink>
          </h4>
          <h4>
            <NavLink to="/cats" activeClassName="active">
              Cats
            </NavLink>
          </h4>
          <Search change={this.onZip} zip={this.state.zip} />
        </div>
      </div>
    );
  }
}

export default Nav;
