import React from "react";

const Information = props => {
  return (
    <div className="Information">
      <div
        className="singleImg"
        style={{
          backgroundImage: `url(${props.pet.media.photos.photo[2].$t})`
        }}
      >
        <div
          className="singleText"
          style={
            props.pet.animal.$t !== "Dog" ? { background: "#c32323e6" } : null
          }
        >
          <div
            className="singleTextImg"
            style={{
              backgroundImage: `url(${props.pet.media.photos.photo[2].$t})`
            }}
          />
          <h1>{props.pet.name.$t}</h1>

          <div className="petInfo">
            <div className="firstInfo">
              <div className="age">
                <h2 style={{ color: "#fff" }}>{props.pet.age.$t}</h2>
                <h3>
                  <img
                    src="https://img.icons8.com/ios/50/ffe47a/cat-footprint-filled.png"
                    alt="icon"
                  />
                  Age
                </h3>
              </div>
              <div className="gender">
                <h2 style={{ color: "#fff" }}>
                  {props.pet.sex.$t === "F" ? "Female" : "Male"}
                </h2>
                <h3>
                  <img
                    src="https://img.icons8.com/ios/50/ffe47a/gender.png"
                    alt="icon"
                  />
                  Gender
                </h3>
              </div>
            </div>

            <div className="secondInfo">
              <div className="breed">
                <h2 style={{ color: "#fff" }}>
                  {props.pet.breeds.breed[0]
                    ? props.pet.breeds.breed[0].$t
                    : "Breed Not Available"}{" "}
                  {props.pet.breeds.breed[1]
                    ? ", " + props.pet.breeds.breed[1].$t
                    : null}
                </h2>
                <h3>
                  <img
                    src="https://img.icons8.com/ios/50/ffe47a/german-shepherd-filled.png"
                    alt="icon"
                  />
                  Breed
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
