import React from "react";

import Information from "./Information/Information";
import ShelterInfo from "./ShelterInfo/ShelterInfo";

import "./Single.scss";

const Single = props => {
  console.log(props.pet);
  const pet = props.pet;

  return (
    <div className="Single">
      <Information pet={pet} />
      <ShelterInfo pet={pet} />
    </div>
  );
};

export default Single;
