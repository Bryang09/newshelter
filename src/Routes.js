import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Shelters from "./Components/Shelters/Shelters";
import Dogs from "./Components/Dogs/Dogs";
import Cats from "./Components/Cats/Cats";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/shelters/:zip" component={Shelters} />
      <Route exact path="/dogs" component={Dogs} />
      <Route exact path="/cats" component={Cats} />
    </Switch>
  );
};

export default Routes;
