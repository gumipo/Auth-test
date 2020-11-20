import React from "react";
import { Route, Switch } from "react-router";
import Auth from "./Auth";
import Login from "./Templete/Login";
import Home from "./Templete/Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Auth>
        <Route exact path={"(/)?"} component={Home} />
      </Auth>
    </Switch>
  );
};
export default Router;
