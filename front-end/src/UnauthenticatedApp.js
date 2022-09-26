import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './screens/Login';

function UnauthenticatedApp() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      {/* <Route exact path="/register" component={ RegisterUser } /> */}
      <Redirect to="/login" />
    </Switch>
  );
}

export default UnauthenticatedApp;
