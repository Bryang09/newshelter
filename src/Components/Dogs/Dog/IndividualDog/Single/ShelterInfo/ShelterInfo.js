import React from "react";

import "./ShelterInfo.scss";

const ShelterInfo = props => {
  console.log(props.pet);
  const pet = props.pet;
  return (
    <div className="ShelterInfo">
      <div className="Text">
        <h1>Interested In Adopting?</h1>
        <h2>
          To find out more about <span>{pet.name.$t}</span> , feel free to
          contact the shelter at any time.
        </h2>
        <h3 className="bold">Address: </h3>
        <h3>
          {pet.contact.address1.$t} {""}
          {pet.contact.city.$t}, {pet.contact.state.$t} {pet.contact.zip.$t}
        </h3>
        <h3 className="bold">Email: </h3>
        <h3>{pet.contact.email.$t}</h3>
        <h3 className="bold">Phone:</h3>
        <h3>{pet.contact.phone.$t}</h3>
      </div>
    </div>
  );
};

export default ShelterInfo;
