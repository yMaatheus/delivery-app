import NavBar from '../components/NavBar/NavBar';
import { useUser } from '../context/user-context';

function OrdersDetails() {
  const { user } = useUser();

  return <NavBar client={ user?.role } />;
}

export default OrdersDetails;
