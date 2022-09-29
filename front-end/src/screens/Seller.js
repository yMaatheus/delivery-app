import NavBar from '../components/NavBar/NavBar';
import Orders from '../components/Orders/Orders';

function Seller() {
  return (
    <>
      <NavBar client="seller" />
      <Orders />
    </>
  );
}

export default Seller;
