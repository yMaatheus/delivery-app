import React, { useCallback, useEffect } from 'react';
import { getBySellerId, getByUserId } from '../../services/sales';
import useOrderStore from '../../store/orderStore';
import OrderCard from '../OrderCard';
import { useUser } from '../../context/user-context';

function Orders() {
  const { user } = useUser();

  const orders = useOrderStore((state) => state.orders);

  const getUserOrders = useCallback(async () => {
    const userOrders = await getByUserId(user.id);
    useOrderStore.setState({ orders: userOrders });
  }, [user.id]);

  const getSellerOrders = useCallback(async () => {
    const sellerOrders = await getBySellerId(user.id);
    useOrderStore.setState({ orders: sellerOrders });
  }, [user]);

  useEffect(() => {
    switch (user.role) {
    case 'client':
      getUserOrders();
      break;
    default:
      getSellerOrders();
      break;
    }
  }, [getSellerOrders, getUserOrders, user.id, user.role]);
  return (
    <>
      {orders.map((order, index) => (
        <OrderCard
          data-testid={ `${user.role}_orders__element-order-date-${order.id}` }
          key={ index }
          role={ user.role }
          { ...order }
        />
      ))}
    </>
  );
}

Orders.propTypes = {

};
export default Orders;
