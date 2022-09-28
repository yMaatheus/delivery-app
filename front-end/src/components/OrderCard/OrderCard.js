import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, status, saleDate, totalPrice, deliveryAddress,
  deliveryNumber }) {
  return (
    <div>
      <span data-testid={ `seller_orders__element-order-id-${id}` }>
        {`Pedido ${id} `}
      </span>
      <span data-testid={ `seller_orders__element-delivery-status-${id}` }>
        {`${status} `}
      </span>
      <span data-testid={ `seller_orders__element-order-date-${id}` }>
        {`${saleDate} `}
      </span>
      <span data-testid={ `seller_orders__element-card-price-${id}` }>
        {`R$ ${totalPrice.replace('.', ',')} `}
      </span>
      <span data-testid={ `seller_orders__element-card-address-${id}` }>
        {deliveryAddress}
        ,
        {' '}
        {deliveryNumber}
      </span>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.string,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.string,
}.isRequired;

export default OrderCard;
