import ProductsLayout from '../../../components/ProductsLayout';
import { Grid } from '@mui/material';
import useCreateProductCards from '../../../components/customHooks/useCreateProdCards';
import tShirtBG from '../../../public/images/tshirts.jpg';
import useFetchProducts from '../../../components/customHooks/useFetchProducts';
import { useState } from 'react';

export default function TShirts() {
  const [products, setProducts] = useState(null);

  const productInfo = { name: 'Shirts', path: 'Tops' };

  const data = useFetchProducts({ category: 'shirt' });

  if (data) {
    if (!products) setProducts(data);
  }

  const productCards = useCreateProductCards(products, tShirtBG);

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
