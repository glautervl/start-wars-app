import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PeopleList from "./People";
import About from "./About";

const Routes = () => (
  <BrowserRouter basename="people">
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <PeopleList />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
