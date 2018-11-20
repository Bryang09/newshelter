import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Shelters from "./Components/Shelters/Shelters";
import Shelter from "./Components/Shelters/Shelter/Shelter";
import Single from "./Components/Shelters/Individual/Individual";

import Dogs from "./Components/Dogs/Dogs";
import Dog from "./Components/Dogs/Dog/Dog";
import IndividualDog from "./Components/Dogs/Dog/IndividualDog/IndividualDogs";

import Cats from "./Components/Cats/Cats";
import Cat from "./Components/Cats/Cat/Cat";
import IndividualCat from "./Components/Cats/Cat/IndividualCat/IndividualCat";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/shelters/:zip" component={Shelters} />
      <Route exact path="/shelter/:id" component={Shelter} />
      <Route exact path="/pets/:id" component={Single} />
      <Route exact path="/dogs" component={Dogs} />
      <Route exact path="/dogs/:zip" component={Dog} />
      <Route exact path="/dog/:id" component={IndividualDog} />
      <Route exact path="/cats" component={Cats} />
      <Route exact path="/cats/:zip" component={Cat} />
      <Route exact path="/cat/:id" component={IndividualCat} />
    </Switch>
  );
};

export default Routes;
