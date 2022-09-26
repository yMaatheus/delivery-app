import { Route, Switch } from 'react-router-dom';

function AuthenticatedApp() {
  return (
    <Switch>
      <Route exact path="" component={ Home } />
    </Switch>
  );
}

export default AuthenticatedApp;
