import ProductsLayout from "../../../components/ProductsLayout";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import productStyles from "../../../styles/products.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

export default function Hoodies({ products }) {
  const productInfo = { name: "Hoodies", path: "Tops" };

  return (
    <>
      <ProductsLayout productsPage={productInfo}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} className={productStyles.productCard} key={product.id}>
              <Card sx={{ width: "100%", height: "100%" }}>
                <CardActionArea>
                  <CardMedia component="img" height="270" image={product.image} />
                  <CardContent>
                    <Typography>{product.title}</Typography>
                    <Typography fontWeight="bold">${product.price}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ProductsLayout>
    </>
  );
}
