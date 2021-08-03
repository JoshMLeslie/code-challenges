import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import LoginComponent from "./views/login/login.component";

function Router() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Switch>
          <Route path="/login" exact component={LoginComponent} />
          <Redirect from="*" to="/login" />
        </Switch>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default Router;
