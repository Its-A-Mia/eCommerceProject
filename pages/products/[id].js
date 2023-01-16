import { Breadcrumbs, CardMedia, Grid, Rating, Typography } from "@mui/material";
import utilStyles from "../../styles/utils.module.css";

import tShirtBG from "../../public/images/tshirts.png";
import hoodiesBG from "../../public/images/hoodies.png";
import jeansBG from "../../public/images/jeans.png";
import shoesBG from "../../public/images/shoes.png";
import sweatersBG from "../../public/images/sweaters.png";
import sweatpantsBG from "../../public/images/sweatpants.png";

import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async (ctx) => {
  const response = await axios.get(`http://localhost:3000/api/product/${ctx.query.id}`);

  return {
    props: { product: response.data },
  };
};

export default function SingleProduct({ product }) {
  // breadcrumbs logic
  const category = product.category;
  let productTopBotPath = null;

  // for breadcrumbs path
  if (
    product.category === "shirt" ||
    product.category === "sweater" ||
    product.category === "hoodie"
  ) {
    productTopBotPath = "Tops";
  } else {
    productTopBotPath = "Bottoms";
  }

  // decide image for order item
  function itemImage(category) {
    switch (category) {
      case "shirt":
        return tShirtBG.src;

      case "sweater":
        return sweatersBG.src;

      case "hoodie":
        return hoodiesBG.src;

      case "sweatpants":
        return sweatpantsBG.src;

      case "jeans":
        return jeansBG.src;

      case "shoe":
        return shoesBG.src;
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Breadcrumbs sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" className={utilStyles.BreadcrumbsLinkStyle}>
            Home
          </Link>
          <Link href={`/products/${productTopBotPath}`} className={utilStyles.BreadcrumbsLinkStyle}>
            {productTopBotPath}
          </Link>
          <Link
            href={
              category === "jeans" || category === "sweatpants"
                ? `/products/${productTopBotPath.toLowerCase()}/${category}`
                : `/products/${productTopBotPath.toLowerCase()}/${category}s`
            }
            className={utilStyles.BreadcrumbsLinkStyle}
          >
            {category === "jeans" || category === "sweatpants"
              ? `${category[0].toUpperCase()}${category.substring(1)}`
              : `${category[0].toUpperCase()}${category.substring(1)}s`}
          </Link>
          <Typography className={utilStyles.BreadcrumbsProductName}>{product.title}</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardMedia component="img" image={itemImage(category)} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography>{product.title}</Typography>
        <Rating value={product.rating} readOnly />
        <Typography>${Number(product.price).toFixed(2)}</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        add to cart
      </Grid>
    </Grid>
  );
}
