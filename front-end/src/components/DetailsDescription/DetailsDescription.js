import { Fragment } from 'react';
import PropTypes from 'prop-types';

function DetailsDescription({ id, seller, date, status }) {
  const makeDate = (saleDate) => `${saleDate.getDate()}/${(saleDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${saleDate.getFullYear()} `;

  const saleDate = new Date(date);
  console.log(date);

  return (
    <>
      <h2>Detalhe do pedido</h2>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        {`PEDIDO ${id}`}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        {`P.Vend: ${seller}`}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-order-date">
        {makeDate(saleDate)}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </span>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ status === 'Pendente' }
      >
        Marcar como entregue
      </button>
    </>
  );
}

DetailsDescription.propTypes = {
  id: PropTypes.number,
  seller: PropTypes.string,
  saleDate: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default DetailsDescription;
