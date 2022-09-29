import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getByRole } from '../../services/users';
import useProductsStore from '../../store/productStore';
import { addSale } from '../../services/sales';

const SALE_INITIAL_STATE = {
  sale: {
    userId: 0,
    sellerId: 0,
    totalPrice: 0,
    deliveryAddress: '',
    deliveryNumber: '',
  },
  product: [],
};

function CheckoutForm() {
  const [sellers, setSellers] = useState([]);
  const [cart, setCart] = useProductsStore((state) => [
    state.cart,
    state.setCart,
  ]);
  const [sales, setSales] = useState(SALE_INITIAL_STATE);
  const history = useHistory();

  useEffect(() => {
    const fetchSellers = async () => {
      setSellers(await getByRole('seller'));
    };
    const getSaleInfo = () => {
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const product = cart.map(({ id: productId, quantity }) => ({
        productId,
        quantity,
      }));
      const totalPrice = cart.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0,
      );
      setSales({ sale: { ...sales.sale, totalPrice, userId }, product });
    };
    getSaleInfo();
    fetchSellers();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setSales({
      ...sales,
      sale: {
        ...sales.sale,
        [name]: name.includes('sellerId') ? Number(value) : value,
      },
    });
  };

  const handleSubmit = async () => {
    const { id } = await addSale(sales);
    setCart([]);
    history.push(`/customer/orders/${id}`);
  };

  const {
    sale: { sellerId, deliveryAddress, deliveryNumber },
  } = sales;

  return (
    <div>
      <form>
        <label htmlFor="seller">
          Vendedor(a) Responsável
          <select
            name="sellerId"
            data-testid="customer_checkout__select-seller"
            value={ sellerId }
            onChange={ handleChange }
          >
            <option value="" key="0">
              Selecione um(a) vendendor(a)
            </option>
            {sellers?.map(({ id, name }) => (
              <option value={ Number(id) } key={ id }>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            name="deliveryAddress"
            type="text"
            id="address"
            data-testid="customer_checkout__input-address"
            value={ deliveryAddress }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            name="deliveryNumber"
            type="number"
            id="number"
            data-testid="customer_checkout__input-address-number"
            value={ deliveryNumber }
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleSubmit }
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
