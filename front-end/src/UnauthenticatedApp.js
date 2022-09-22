import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function UnauthenticatedApp() {
  return (
    <Switch>
      <Route path="/login" component={ LoginForm } />
      <Redirect to="/login" />
    </Switch>
  );
}

export default UnauthenticatedApp;
