import productStyles from "../../styles/products.module.css";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function createProdCards(products) {
  const dispatch = useDispatch();

  const productCards = products.map((product) => (
    <Grid item xs={12} sm={6} md={4} className={productStyles.productCard} key={product.id}>
      <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <CardActionArea
          sx={{
            height: "93%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box alignSelf="center">
            <CardMedia component="img" height="250px" image={product.image} />
          </Box>
          <CardContent
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography alignSelf="flex-start">{product.title}</Typography>
            <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap="8px">
              <Typography alignSelf="flex-start" fontWeight="bold">
                ${product.price.toFixed(2)}
              </Typography>
              <Rating name="read-only" readOnly sx={{ alignSelf: "flex-start" }} />
            </Box>
          </CardContent>
        </CardActionArea>
        <Button
          variant="contained"
          onClick={() => dispatch(cartActions.addToCart({ id: product.id }))}
          fullWidth
          sx={{ alignSelf: "flex-start" }}
        >
          Add to cart
        </Button>
      </Card>
    </Grid>
  ));
  return productCards;
}

// // create different custom hook files for these
// export function createCategoryButtons(categories) {}

// export function createCartCards() {}
// export function createOrderCards() {}
