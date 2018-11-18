import React from "react";

import { Link } from "react-router-dom";

const Form = props => {
  return (
    <div className="landingForm">
      <form onChange={props.change}>
        <input type="text" placeholder="Type Zip To Find Shelters Near You" />
        <button type="submit" style={{ display: "none" }} />
      </form>
      <Link to={{ pathname: "/shelters/:zip", state: props.zip }}>
        <img
          src="https://img.icons8.com/windows/50/ffffff/search.png"
          style={{ height: "25px", color: "#fff" }}
          alt="search"
        />
      </Link>
    </div>
  );
};

export default Form;
