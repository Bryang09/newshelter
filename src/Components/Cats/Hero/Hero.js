import React from "react";

import { Link } from "react-router-dom";

import "./Hero.scss";

const Hero = props => {
  return (
    <div className="Hero Cats">
      <h1>Search For Cats Near You</h1>
      <form className="text-input" onChange={props.change}>
        <input type="text" id="input1" placeholder="Search For Cats Near You" />
        <label htmlFor="input1" style={{ background: "#e03616" }}>
          Zip
        </label>
        <Link to={`/cats/${props.zip}`}>
          <button
            type="submit"
            style={{ height: 0, width: 0, padding: 0, border: 0 }}
          />
        </Link>
      </form>
    </div>
  );
};

export default Hero;
