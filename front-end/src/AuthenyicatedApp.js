import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from './context/user-context';
import Customer from './screens/Customer';
import Seller from './screens/Seller';

function AuthenticatedApp() {
  const { user } = useUser();

  return (
    <Switch>
      <Route exact path="/customer/products" component={ Customer } />
      <Route exact path="/seller" component={ Seller } />
      {
        (user?.role === 'seller' && <Redirect to="/seller" />)
        || (user?.role === 'customer' && <Redirect to="/customer/products" />)
      }
    </Switch>
  );
}

export default AuthenticatedApp;
