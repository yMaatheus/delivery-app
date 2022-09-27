import React, { useEffect, useState } from 'react';

const TABLE_HEADERS = [
  'Item',
  'Descrição',
  'Quantidade',
  'Valor Unitário',
  'Sub-Total',
  'Remover',
];

function OrdersTable() {
  let cart = localStorage.getItem('carrinho');
  const [totalPrice, setTotalPrice] = useState(0);
  const [Cart, setCart] = useState(cart);

  const getTotalPrice = (arr) => arr?.forEach(({ price, quantity }) => {
    const total = (Number(price) * Number(quantity));
    setTotalPrice(totalPrice + total);
  });

  useEffect(() => {
    getTotalPrice(cart);
  }, [Cart]);

  const handleRemove = (index) => {
    const newCart = Cart.filter((_item, i) => i !== index);
    localStorage.setItem('carrinho', newCart);
    cart = localStorage.getItem('carrinho');
    setCart(cart);
  };

  const renderTBody = () => Cart?.map(({ description, quantity, price }, i) => (
    <tr key={ i }>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
      >
        {i + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${i}` }
      >
        {description}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
      >
        {price}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
      >
        {price * quantity}
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
        <tbody>
          {renderTBody()}
        </tbody>
      </table>
      <div>
        <span>{ `Total: ${totalPrice}` }</span>
      </div>
    </div>
  );
}

export default OrdersTable;
