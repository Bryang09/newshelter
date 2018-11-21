import React from "react";

import { Link } from "react-router-dom";

const dogMap = props => {
  const dog = props.dogs;

  const dogs = dog
    .filter(res => res.media.photos)
    .map(res => {
      return (
        <Link to={`/dog/${res.id.$t}`} key={res.id.$t}>
          <div
            className="dog"
            style={{ backgroundImage: `url(${res.media.photos.photo[2].$t})` }}
          >
            <div className="dogText">
              <h5>
                {res.name.$t}/ {res.sex.$t}
              </h5>
            </div>
          </div>
        </Link>
      );
    });
  return <div className="dogMap">{dogs}</div>;
};

export default dogMap;
