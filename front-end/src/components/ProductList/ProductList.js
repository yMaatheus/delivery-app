import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import useProductsStore from '../../store/productStore';
import { getAll } from '../../services/products';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
  const array = useProductsStore((state) => state.products);

  useEffect(() => {
    async function getProducts() {
      const products = await getAll();
      useProductsStore.setState({ products });
    }
    getProducts();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={ 1 }>
        {array?.map((product) => (
          <Grid item key={ product.id } sx={ { width: '25%' } }>
            <ProductCard key={ product.id } { ...product } />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
