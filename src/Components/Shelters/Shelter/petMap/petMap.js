import React from "react";

const PetMap = props => {
  console.log(props.pets);

  const Pets = props.pets
    .filter(res => res.media.photos)
    .map(res => {
      return (
        <div className="shelterPet" key={res.id.$t}>
          <h3>{res.name.$t}</h3>
        </div>
      );
    });

  return Pets;
};

export default PetMap;
