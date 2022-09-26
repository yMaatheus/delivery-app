import React, { useEffect } from 'react';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
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
      <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, md: 12 } }>
        {products?.map((product) => (
          <Grid item xs={ 2 } sm={ 2 } md={ 2 } key={ product.id }>
            <ProductCard key={ product.id } { ...product } />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
