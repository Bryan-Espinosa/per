import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/landing/Landing";
import ProfileInfo from "./components/profileinfo/ProfileInfo";
import ProfilePage from "./components/profilePage/ProfilePage";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/profileinfo" component={ProfileInfo} />
    <Route path="/profilepage" component={ProfilePage} />
  </Switch>
);
