import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from './context/user-context';
import Customer from './screens/Customer';
import CustomerCheckout from './screens/CustomerCheckout';
import OrdersDetails from './screens/OrdersDetails';
import OrdersUser from './screens/OrdersUser';
import Seller from './screens/Seller';

function AuthenticatedApp() {
  const { user } = useUser();

  return (
    <Switch>
      <Route exact path="/customer/products" component={ Customer } />
      <Route exact path="/customer/checkout" component={ CustomerCheckout } />
      <Route exact path="/customer/orders/" component={ OrdersUser } />
      <Route exact path="/customer/orders/:id" component={ OrdersDetails } />
      <Route exact path="/seller/orders" component={ Seller } />
      <Route exact path="/seller/orders/:id" component={ OrdersDetails } />
      {
        (user?.role === 'seller' && <Redirect to="/seller/orders" />)
        || (user?.role === 'customer' && <Redirect to="/customer/products" />)
      }
    </Switch>
  );
}

export default AuthenticatedApp;
