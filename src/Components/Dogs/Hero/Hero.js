import React from "react";

import { Link } from "react-router-dom";

import "./Hero.scss";

const Hero = props => {
  return (
    <div className="Hero">
      <h1>Search For Dogs Near You</h1>
      <form className="text-input" onChange={props.change}>
        <input type="text" id="input1" placeholder="Search For Dogs Near You" />
        <label htmlFor="input1" style={{ background: "#0088ff" }}>
          Zip
        </label>
        <Link to={`/dogs/${props.zip}`}>
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
