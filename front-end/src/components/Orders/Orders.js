import React, { useEffect } from 'react';
import { getBySellerId } from '../../services/sales';
import useOrderStore from '../../store/orderStore';
import OrderCard from '../OrderCard';
import { useUser } from '../../context/user-context';

function Orders() {
  const { user } = useUser();

  const orders = useOrderStore((state) => state.orders);
  console.log(orders);
  useEffect(() => {
    async function getOrders() {
      const sellerOrders = await getBySellerId(user.id);
      useOrderStore.setState({ orders: sellerOrders });
    }
    getOrders();
  }, [user.id]);
  return (
    <>
      {orders.map((order, index) => (
        <OrderCard
          data-testid={ `seller_orders__element-order-date-${order.id}` }
          key={ index }
          { ...order }
        />
      ))}
    </>
  );
}

Orders.propTypes = {

};
export default Orders;
