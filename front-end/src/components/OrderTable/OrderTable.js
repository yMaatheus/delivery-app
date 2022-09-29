import PropTypes from 'prop-types';

function OrderTable({ products }) {
  const TABLE_HEADERS = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-Total',
  ];

  const renderTBody = (productsArray) => productsArray
    .map(({ name, quantity, price }, i) => (
      <tr key={ i }>
        <td
          data-testid={ `customer_order_details__element-order-table-item-number-${i}` }
        >
          {i + 1}
        </td>
        <td
          data-testid={ `customer_order_details__element-order-table-name-${i}` }
        >
          {name}
        </td>
        <td
          data-testid={ `customer_order_details__element-order-table-quantity-${i}` }
        >
          {quantity}
        </td>
        <td
          data-testid={ `customer_order_details__element-order-table-unit-price-${i}` }
        >
          {`R$ ${Number(price).toFixed(2).toString().replace(/\./, ',')}`}
        </td>
        <td
          data-testid={ `customer_order_details__element-order-table-sub-total-${i}` }
        >
          {`R$ ${Number(price * quantity)
            .toFixed(2)
            .toString()
            .replace(/\./, ',')}`}
        </td>
      </tr>
    ));

  return (
    <table cellPadding="0" cellSpacing="0">
      <thead>
        {TABLE_HEADERS.map((header) => (
          <th key={ header }>{header}</th>
        ))}
      </thead>
      <tbody>{renderTBody(products)}</tbody>
    </table>
  );
}

OrderTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.string,
    }),
  ).isRequired,
};

export default OrderTable;
