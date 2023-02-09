import ProductsLayout from '../../../components/ProductsLayout';
import { Grid } from '@mui/material';
import useCreateProductCards from '../../../components/customHooks/useCreateProdCards';
import sweatersBG from '../../../public/images/sweaters.jpg';
import useFetchProducts from '../../../components/customHooks/useFetchProducts';
import { useState } from 'react';

export default function Sweaters() {
  const [products, setProducts] = useState(null);

  const productInfo = { name: 'Sweaters', path: 'Tops' };

  const data = useFetchProducts({ category: 'sweater' });

  if (data) {
    if (!products) setProducts(data);
  }

  const productCards = useCreateProductCards(products, sweatersBG);

  if (!products) {
    return (
      <>
        <ProductsLayout productInfo={productInfo}>
          <Grid container spacing={2}>
            <p>Loading products...</p>
          </Grid>
        </ProductsLayout>
      </>
    );
  }

  return (
    <>
      <ProductsLayout productInfo={productInfo}>
        <Grid container spacing={2}>
          {productCards}
        </Grid>
      </ProductsLayout>
    </>
  );
}
