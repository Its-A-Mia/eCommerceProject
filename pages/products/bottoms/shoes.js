import ProductsLayout from '../../../components/ProductsLayout';
import { Grid } from '@mui/material';
import useCreateProductCards from '../../../components/customHooks/useCreateProdCards';
import shoesBG from '../../../public/images/shoes.jpg';
import { useState } from 'react';
import useFetchProducts from '../../../components/customHooks/useFetchProducts';

export default function Shoes() {
  const [products, setProducts] = useState(null);

  const productInfo = { name: 'Shoes', path: 'Bottoms' };

  const data = useFetchProducts({ category: 'shoe' });

  if (data) {
    if (!products) setProducts(data);
  }

  const productCards = useCreateProductCards(products, shoesBG);

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
