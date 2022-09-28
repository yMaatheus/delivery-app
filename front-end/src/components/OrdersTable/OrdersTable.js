import React, { useEffect, useState } from 'react';
import useProductsStore from '../../store/productStore';

const TABLE_HEADERS = [
  'Item',
  'Descrição',
  'Quantidade',
  'Valor Unitário',
  'Sub-Total',
  'Remover',
];

function OrdersTable() {
  const [cart, setCart] = useProductsStore((state) => [
    state.cart,
    state.setCart,
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart?.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
      || 0;
    setTotalPrice(total);
  }, [cart]);

  const handleRemove = (index) => {
    const newCart = cart.filter((_item, i) => i !== index);
    setCart(newCart);
  };

  const renderTBody = () => cart?.map(({ name, quantity, price }, i) => (
    <tr key={ i }>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
      >
        {i + 1}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${i}` }>
        {name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
      >
        {`R$ ${Number(price).toFixed(2).toString().replace(/\./, ',')}`}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
      >
        {`R$ ${Number(price * quantity)
          .toFixed(2)
          .toString()
          .replace(/\./, ',')}`}
      </td>
      <td>
        <button
          type="button"
          data-testid={ `customer_checkout__element-order-table-remove-${i}` }
          onClick={ () => handleRemove(i) }
        >
          Remover
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          {TABLE_HEADERS.map((header) => (
            <th key={ header }>{header}</th>
          ))}
        </thead>
        <tbody>{renderTBody()}</tbody>
      </table>
      <div>
        <span data-testid="customer_checkout__element-order-total-price">
          {`Total: R$ ${totalPrice
            .toFixed(2)
            .toString()
            .replace(/\./, ',')}`}

        </span>
      </div>
    </div>
  );
}

export default OrdersTable;
