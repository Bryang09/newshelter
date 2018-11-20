import React from "react";

import { Link } from "react-router-dom";

import "./Search.scss";

const Search = props => {
  return (
    <div className="navSearch">
      <form onChange={props.change}>
        <input type="text" placeholder="Search Shelters Near You" />
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

export default Search;
