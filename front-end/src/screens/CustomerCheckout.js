import CheckoutForm from '../components/CheckoutForm';
import NavBar from '../components/NavBar/NavBar';
import OrdersTable from '../components/OrdersTable/OrdersTable';

function CustomerCheckout() {
  return (
    <>
      <NavBar client="customer" />
      <OrdersTable />
      <CheckoutForm />
    </>
  );
}

export default CustomerCheckout;
