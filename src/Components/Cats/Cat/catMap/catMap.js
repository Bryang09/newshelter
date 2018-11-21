import React from "react";

import { Link } from "react-router-dom";

const catMap = props => {
  const cat = props.cats;

  const cats = cat
    .filter(res => res.media.photos)
    .map(res => {
      return (
        <Link to={`/cat/${res.id.$t}`} key={res.id.$t}>
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
  return <div className="dogMap">{cats}</div>;
};

export default catMap;
