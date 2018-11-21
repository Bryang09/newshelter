import React, { Component } from "react";

import "./Nav.scss";

import { NavLink } from "react-router-dom";

import Search from "./Search/Search";
import Burger from "./Burger/Burger";

class Nav extends Component {
  state = {
    zip: "",
    burger: false
  };

  onZip = e => {
    e.preventDefault();
    this.setState({ zip: e.target.value });
  };
  onMobile = () => {
    this.setState({ burger: !this.state.burger });
  };
  render() {
    return (
      <div
        className="Nav"
        style={
          this.state.burger
            ? { backgroundColor: "#ff7ba5", height: "100vh" }
            : this.props.page === "/"
            ? { backgroundColor: "rgba(0,0,0,0)" }
            : null
        }
      >
        <div
          className="navTitle"
          style={
            this.props.page === "/"
              ? { backgroundColor: "rgba(0,0,0,0.0)" }
              : null
          }
        >
          <Burger
            click={this.onMobile}
            burger={this.state.burger}
            color={this.props.color}
          />
          <h2
            style={
              this.state.burger
                ? { display: "flex", textTransform: "uppercase" }
                : null
            }
          >
            <NavLink to="/" exact activeClassName="active">
              Bryan's Shelters
            </NavLink>
          </h2>
        </div>
        <div
          className="Navigation"
          style={this.state.burger ? { display: "flex" } : null}
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
          <Search
            change={this.onZip}
            zip={this.state.zip}
            burger={this.state.burger}
            click={this.onMobile}
          />
        </div>
      </div>
    );
  }
}

export default Nav;
