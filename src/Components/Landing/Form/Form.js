import React from "react";

import { Link } from "react-router-dom";

const Form = props => {
  return (
    <div className="landingForm">
      <form onChange={props.change}>
        <input type="text" placeholder="Type Zip To Find Shelters Near You" />

        <Link to={`/shelters/${props.zip}`}>
          <button
            type="submit"
            style={{ height: 0, width: 0, padding: 0, border: 0 }}
          />
          <img
            src="https://img.icons8.com/windows/50/ffffff/search.png"
            style={{ height: "25px", color: "#fff" }}
            alt="search"
          />
        </Link>
      </form>
    </div>
  );
};

export default Form;
