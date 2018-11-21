import React from "react";

import { Link } from "react-router-dom";

import "./petMap.scss";

const PetMap = props => {
  const Pets = props.pets
    .filter(res => res.media.photos)
    .map(res => {
      return (
        <Link
          to={{
            pathname: `/pets/${res.id.$t}`
          }}
          key={res.id.$t}
        >
          <div
            className="shelterPet"
            style={{ backgroundImage: `url(${res.media.photos.photo[2].$t})` }}
          >
            <div className="shelterPetText">
              <h5>
                {res.name.$t}/ {res.sex.$t}{" "}
              </h5>
            </div>
          </div>
        </Link>
      );
    });

  return <div className="ShelterPets">{Pets}</div>;
};

export default PetMap;
