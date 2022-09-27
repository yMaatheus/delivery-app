import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import useProductsStore from '../../store/productStore';
import { getAll } from '../../services/products';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
  const products = useProductsStore((state) => state.products);

  useEffect(() => {
    async function getProducts() {
      const response = await getAll();
      useProductsStore.setState({ products: response });
    }
    getProducts();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={ 1 }>
        {products?.map((product) => (
          <Grid item key={ product.id } sx={ { width: '25%' } }>
            <ProductCard key={ product.id } { ...product } />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
