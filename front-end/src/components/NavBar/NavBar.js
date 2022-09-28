import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUser } from '../../context/user-context';

import './navBar.css';

function NavBar({ client }) {
  const [url, setUrl] = useState('');
  const [navTitle, setNavTitle] = useState('');
  const { user, logout } = useUser();
  const { push } = useHistory();
  const pathname = useLocation();

  useEffect(() => {
    switch (client) {
    case 'customer':
      setUrl('/customer/products');
      setNavTitle('PRODUTOS');
      break;
    case 'seller':
      setUrl('/seller/orders');
      setNavTitle('PEDIDOS');
      break;
    default:
      setUrl('/admin/manage');
      setNavTitle('GERENCIAR USUÁRIOS');
      break;
    }
  }, [client, push]);

  const goToUrl = () => {
    push(url);
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
          onClick={ goToUrl }
        >
          {navTitle}
        </button>
        {client === 'customer' && (
          <button
            type="button"
            className="item"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ goToOrders }
          >
            MEUS PEDIDOS
          </button>
        )}
      </div>
      <div className="btnBox">
        <p
          className="userName"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name}
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

NavBar.propTypes = {
  client: PropTypes.string,
}.isRequired;
export default NavBar;
