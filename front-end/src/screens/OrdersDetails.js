import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { useUser } from '../context/user-context';
import { getSaleDetails } from '../services/sales';

function OrdersDetails() {
  const { user } = useUser();
  const { id } = useParams();

  const [details, setDetails] = useState({});

  const getDetails = useCallback(async () => {
    const response = await getSaleDetails(id);
    setDetails(response);
  }, [id]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    <>
      <NavBar client={ user?.role } />
      <h2>Detalhe do pedido</h2>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        {`PEDIDO ${id}`}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        {`P.Vend: ${details.seller}`}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-order-date">
        {/* data de criação do pedido */}
        00/00/2022
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        status do pedido
      </span>
      <button type="button" data-testid="customer_order_details__button-delivery-check">
        Marcar como entregue
      </button>
    </>
  );
}

export default OrdersDetails;
