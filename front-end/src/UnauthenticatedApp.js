import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function UnauthenticatedApp() {
  return (
    <Switch>
      <Route exact path="/login" component={ LoginForm } />
      {/* <Route exact path="/register" component={ RegisterUser } /> */}
      <Redirect to="/login" />
    </Switch>
  );
}

export default UnauthenticatedApp;
