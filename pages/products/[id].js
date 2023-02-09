import {
  Box,
  Breadcrumbs,
  Button,
  CardMedia,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Rating,
  Typography,
} from '@mui/material';
import utilStyles from '../../styles/utils.module.css';

import tShirtBG from '../../public/images/tshirts.jpg';
import hoodiesBG from '../../public/images/hoodies.jpg';
import jeansBG from '../../public/images/jeans.jpg';
import shoesBG from '../../public/images/shoes.jpg';
import sweatersBG from '../../public/images/sweaters.jpg';
import sweatpantsBG from '../../public/images/sweatpants.jpg';

import axios from 'axios';
import Link from 'next/link';
import { Add, Remove } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { useState } from 'react';

export const getServerSideProps = async (ctx) => {
  const response = await axios.get(`http://localhost:8080/api/product/${ctx.query.id}`);

  return {
    props: { product: response.data },
  };
};

export default function SingleProduct({ product }) {
  const dispatch = useDispatch();

  const [cartQuantity, setCartQuantity] = useState(1);

  const handleAddOrSubToCart = (input) => {
    let newQuantity = cartQuantity + input;
    if (newQuantity < 1) {
      return setCartQuantity(1);
    }
    setCartQuantity(newQuantity);
  };

  // breadcrumbs logic
  const category = product.category;
  let productTopBotPath = null;

  // for breadcrumbs path
  if (product.category === 'shirt' || product.category === 'sweater' || product.category === 'hoodie') {
    productTopBotPath = 'Tops';
  } else {
    productTopBotPath = 'Bottoms';
  }

  // decide image for order item
  function itemImage(category) {
    switch (category) {
      case 'shirt':
        return tShirtBG.src;

      case 'sweater':
        return sweatersBG.src;

      case 'hoodie':
        return hoodiesBG.src;

      case 'sweatpants':
        return sweatpantsBG.src;

      case 'jeans':
        return jeansBG.src;

      case 'shoe':
        return shoesBG.src;
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Breadcrumbs sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" className={utilStyles.BreadcrumbsLinkStyle}>
            Home
          </Link>
          <Link href={`/products/${productTopBotPath}`} className={utilStyles.BreadcrumbsLinkStyle}>
            {productTopBotPath}
          </Link>
          <Link
            href={
              category === 'jeans' || category === 'sweatpants'
                ? `/products/${productTopBotPath.toLowerCase()}/${category}`
                : `/products/${productTopBotPath.toLowerCase()}/${category}s`
            }
            className={utilStyles.BreadcrumbsLinkStyle}
          >
            {category === 'jeans' || category === 'sweatpants'
              ? `${category[0].toUpperCase()}${category.substring(1)}`
              : `${category[0].toUpperCase()}${category.substring(1)}s`}
          </Link>
          <Typography className={utilStyles.BreadcrumbsProductName}>{product.title}</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardMedia component="img" image={itemImage(category)} />
      </Grid>
      <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="space-around">
        <Box>
          <Typography variant="h6">{product.title}</Typography>
          <Rating value={product.rating} readOnly />
          <Typography>${Number(product.price).toFixed(2)}</Typography>
          <Typography>{product.description}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="8px" width="60%">
          <Paper
            component="form"
            sx={{
              position: 'relative',
              p: '2px 2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderRadius: '5px',
            }}
          >
            <IconButton onClick={() => handleAddOrSubToCart(-1)}>
              <Remove />
            </IconButton>

            <InputBase
              className={utilStyles.input}
              type="text"
              value={cartQuantity}
              sx={{
                '&.MuiInputBase-root': {
                  '& input': {
                    textAlign: 'center',
                  },
                },
              }}
            />

            <IconButton onClick={() => handleAddOrSubToCart(1)}>
              <Add />
            </IconButton>
          </Paper>
          <Button
            variant="contained"
            onClick={() => dispatch(cartActions.addToCart({ id: product.id, quantity: cartQuantity }))}
            fullWidth
            sx={{ alignSelf: 'flex-start' }}
          >
            Add to cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
