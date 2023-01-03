// product card styles --- createProductCards
import productStyles from "../styles/products.module.css";
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

export function createProductCards(products) {

  const addToCart = (e, key) => {
    e.stopPropagation();
    console.log(key);
    console.log(products[key-1]);
  };

  const productCards = products.map((product) => (
   (
      <Grid item xs={12} sm={6} md={4} className={productStyles.productCard} key={product.id}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardActionArea
            sx={{
              height: "100%",
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
                  ${product.price}
                </Typography>
                <Rating name="read-only" readOnly sx={{ alignSelf: "flex-start" }} />
                <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                  <Button
                    variant="contained"
                    onClick={(e) => addToCart(e, product.id)}
                    sx={{ alignSelf: "center" }}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ),
  ));
  return productCards;
}

// create different lib files for these
export function createCategoryButtons(categories) {}

export function createCartCards() {}
export function createOrderCards() {}
