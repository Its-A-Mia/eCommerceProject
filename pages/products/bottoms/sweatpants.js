import ProductsLayout from '../../../components/ProductsLayout';
import { Grid } from '@mui/material';
import useCreateProductCards from '../../../components/customHooks/useCreateProdCards';
import sweatpantsBG from '../../../public/images/sweatpants.jpg';
import useFetchProducts from '../../../components/customHooks/useFetchProducts';
import { useState } from 'react';

export default function Sweatpants() {
  const [products, setProducts] = useState(null);

  const productInfo = { name: 'Sweatpants', path: 'Bottoms' };

  const data = useFetchProducts({ category: 'sweatpants' });

  if (data) {
    if (!products) setProducts(data);
  }

  const productCards = useCreateProductCards(products, sweatpantsBG);

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
