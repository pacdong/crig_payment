import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";

const PaymentRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/Home" />
    </Route>
    <Route exact path="/" component={Home} />
    <Route path="/Home" component={Home} />
    {/* <Redirect from="*" to="/Home" /> */}
  </Switch>
);

const AppRouter = () => <PaymentRoutes />;

export default AppRouter;
