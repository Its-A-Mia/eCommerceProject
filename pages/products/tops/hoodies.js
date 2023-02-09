import ProductsLayout from '../../../components/ProductsLayout';
import { Grid } from '@mui/material';
import useCreateProductCards from '../../../components/customHooks/useCreateProdCards';
import hoodiesBG from '../../../public/images/hoodies.jpg';
import useFetchProducts from '../../../components/customHooks/useFetchProducts';
import { useState } from 'react';

export default function Hoodies() {
  const [products, setProducts] = useState(null);

  const productInfo = { name: 'Hoodies', path: 'Tops' };

  const data = useFetchProducts({ category: 'hoodie' });

  if (data) {
    if (!products) setProducts(data);
  }

  const productCards = useCreateProductCards(products, hoodiesBG);

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
