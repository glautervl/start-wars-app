import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Planets from "./Planets";
import About from "./About";

const Routes = () => (
  <BrowserRouter basename="planets">
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Planets />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
