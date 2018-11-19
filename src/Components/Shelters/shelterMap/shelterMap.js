import React from "react";

import { Link } from "react-router-dom";

import "./shelterMap.scss";

const shelterMap = props => {
  const shelters = props.shelters.map(res => {
    return (
      <div className="Shelters_" key={res.id.$t}>
        <h3>
          <Link to={{ pathname: `/shelter/${res.id.$t}` }}>{res.name.$t}</Link>
        </h3>
        <h4>{res.address1.$t}</h4>
        <h4>
          {res.city.$t}, {res.state.$t} {res.zip.$t}
        </h4>
        <h4>{res.email.$t}</h4>
        <h4 id="phone">{res.phone.$t}</h4>
      </div>
    );
  });

  return shelters;
};

export default shelterMap;
