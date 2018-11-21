import React from "react";

import { Link } from "react-router-dom";

const Form = props => {
  return (
    <form className="text-input" onChange={props.change}>
      <input type="text" id="input1" placeholder="Search Shelters Near You" />
      <label htmlFor="input1">Zip</label>
      <Link to={`/shelters/${props.zip}`}>
        <button
          type="submit"
          style={{ height: 0, width: 0, padding: 0, border: 0 }}
        />
      </Link>
    </form>
  );
};

export default Form;
