import NavBar from '../components/NavBar';
import Orders from '../components/Orders/Orders';

function OrdersUser() {
  return (
    <>
      <NavBar client="customer" />
      <Orders />
    </>
  );
}

export default OrdersUser;
