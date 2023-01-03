import ProductsLayout from "../../../components/ProductsLayout";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { createProductCards } from "../../../lib/constructCards";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

export default function TShirts({ products }) {
  const productInfo = { name: "T-Shirts", path: "Tops" };

  const productCards = createProductCards(products);
  // console.log(productCards);

  return (
    <>
      <ProductsLayout productsPage={productInfo}>
        <Grid container spacing={2}>
          {productCards}
        </Grid>
      </ProductsLayout>
    </>
  );
}
