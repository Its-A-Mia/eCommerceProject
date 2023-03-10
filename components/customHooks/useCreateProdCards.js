import productStyles from '../../styles/products.module.css';

import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import useFilter from './useFilter';
import { useEffect } from 'react';
import useSort from './useSort';

export default function useCreateProdCards(products, image) {
  const dispatch = useDispatch();

  const view = useSelector((state) => state.productView.view);
  const sortType = useSelector((state) => state.sort.sortType);

  const priceFilter = useSelector((state) => state.filter.priceFilter);
  const ratingFilter = useSelector((state) => state.filter.ratingFilter);
  const colorFilter = useSelector((state) => state.filter.colorFilter);

  const filter = { price: priceFilter, rating: ratingFilter, color: colorFilter };

  products = useFilter(products, filter);
  products = useSort(products, sortType);
  console.log(products);

  if (!products) return;

  // if nothing is returned when filter is applied, return this
  if (products.length === 0) {
    return (
      <Grid item xs={12}>
        <Typography>No results match these filters</Typography>
      </Grid>
    );
  }

  const productCards =
    view === 'grid'
      ? products.map((product) => (
          <Grid item xs={12} sm={6} md={4} className={productStyles.productCardGrid} key={product.id}>
            <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea
                sx={{
                  height: '93%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
                onClick={() => (window.location = `/products/${product.id}`)}
              >
                <Box alignSelf="center">
                  <CardMedia component="img" height="250px" image={image.src} />
                </Box>
                <CardContent
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography alignSelf="flex-start">{product.title}</Typography>
                  <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap="8px">
                    <Typography alignSelf="flex-start" fontWeight="bold">
                      ${Number(product.price).toFixed(2)}
                    </Typography>
                    <Rating name="read-only" value={product.rating} readOnly sx={{ alignSelf: 'flex-start' }} />
                  </Box>
                </CardContent>
              </CardActionArea>
              <Button
                variant="contained"
                onClick={(e) => dispatch(cartActions.addToCart({ id: product.id, quantity: 1, e }))}
                fullWidth
                sx={{ alignSelf: 'flex-start' }}
              >
                Add to cart
              </Button>
            </Card>
          </Grid>
        ))
      : products.map((product) => (
          <Grid item xs={12} sm={12} md={12} key={product.id}>
            <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
                onClick={() => (window.location = `/products/${product.id}`)}
              >
                <Box>
                  <CardMedia component="img" height="250px" image={image.src} />
                </Box>
                <CardContent
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography alignSelf="flex-start">{product.title}</Typography>
                  <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap="8px">
                    <Typography alignSelf="flex-start" fontWeight="bold">
                      ${Number(product.price).toFixed(2)}
                    </Typography>
                    <Rating name="read-only" value={product.rating} readOnly sx={{ alignSelf: 'flex-start' }} />
                  </Box>
                  <Box width="100%">
                    <Button
                      variant="contained"
                      onClick={(e) => dispatch(cartActions.addToCart({ id: product.id, quantity: 1, e }))}
                      fullWidth
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Add to cart
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ));
  return productCards;
}
