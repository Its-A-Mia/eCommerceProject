import ProductsLayout from '../../../components/ProductsLayout';
import { Grid } from '@mui/material';
import useCreateProductCards from '../../../components/customHooks/useCreateProdCards';
import jeansBG from '../../../public/images/jeans.jpg';
import useFetchProducts from '../../../components/customHooks/useFetchProducts';
import { useState } from 'react';

export default function Jeans() {
  const [products, setProducts] = useState(null);

  const productInfo = { name: 'Jeans', path: 'Bottoms' };

  const data = useFetchProducts({ category: 'jeans' });

  if (data) {
    if (!products) setProducts(data);
  }

  const productCards = useCreateProductCards(products, jeansBG);

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
