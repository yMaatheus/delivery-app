import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useProductsStore from '../../store/productStore';
import { getAll } from '../../services/products';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
  const array = useProductsStore((state) => state.products);
  const cart = useProductsStore((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

  const handleCheckout = () => history.push('/customer/checkout');

  useEffect(() => {
    async function getProducts() {
      const products = await getAll();
      useProductsStore.setState({ products });
    }
    getProducts();
    setTotalPrice(cart.reduce((acc, { price, quantity }) => acc + (price * quantity), 0));
  }, [cart]);

  return (
    // <Container maxWidth="lg">
    //   <Grid container spacing={ 1 }>
    //     {array?.map((product) => (
    //       <Grid item key={ product.id } sx={ { width: '25%' } }>
    //         <ProductCard key={ product.id } { ...product } />
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Container>
    <div>
      <div>
        {array?.map((product) => (
          <ProductCard key={ product.id } { ...product } />
        ))}
      </div>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ handleCheckout }
        disabled={ cart.length === 0 }
      >
        Ver Carrinho: R$
        <p data-testid="customer_products__checkout-bottom-value">
          { totalPrice.toFixed(2).toString().replace(/\./, ',') }
        </p>
      </button>
    </div>
  );
}

export default ProductList;
