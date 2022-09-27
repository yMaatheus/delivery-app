import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/user-context';
import './navBar.css';

function NavBar() {
  const { user, logout } = useUser();
  const { push } = useHistory();
  const pathname = useLocation();
  console.log(user);

  const goToProducts = () => {
    if (pathname === '/customer/products') return;
    push('/customer/products');
  };

  const goToOrders = () => {
    if (pathname === '/customer/orders') return;
    push('/customer/orders');
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="btnBox">
        <button
          type="button"
          className="item"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ goToProducts }
        >
          PRODUTOS
        </button>
        <button
          type="button"
          className="item"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ goToOrders }
        >
          MEUS PEDIDOS
        </button>
      </div>
      <div className="btnBox">
        <p
          className="userName"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name.toUpperCase()}
        </p>
        <button
          type="button"
          className="item"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleLogOut }
        >
          SAIR
        </button>
      </div>
    </header>
  );
}

export default NavBar;
