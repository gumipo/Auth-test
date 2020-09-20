import React from "react";
// import Auth from "./Auth";
import { Route, Switch } from "react-router";
import Login from "./Templete/Login";
import Home from "./Templete/Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
};
export default Router;
