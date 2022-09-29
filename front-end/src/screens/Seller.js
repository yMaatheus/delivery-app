import NavBar from '../components/NavBar/NavBar';
import Orders from '../components/Orders/Orders';
import { useUser } from '../context/user-context';

function Seller() {
  const { user } = useUser();

  return (
    <>
      <NavBar client={ user?.role } />
      <Orders />
    </>
  );
}

export default Seller;
