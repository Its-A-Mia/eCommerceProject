import ProductsFilter from "./ProductsFilter";
import ProductsTitle from "./ProductsTitle";
import { Breadcrumbs, Typography, Grid } from "@mui/material";

import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function ProductsLayout({ children, productInfo, filterSetters }) {
  // Breadcrumbs for easy nav
  //   filter
  // category name, sort by, grid/list view, chips
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Breadcrumbs sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/" className={utilStyles.BreadcrumbsLinkStyle}>
              Home
            </Link>
            <Link
              href={`/products/${productInfo.path.toLowerCase()}`}
              className={utilStyles.BreadcrumbsLinkStyle}
            >
              {productInfo.path}
            </Link>
            <Typography className={utilStyles.BreadcrumbsProductName}>
              {productInfo.name}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item md={3}>
          <ProductsFilter products={productInfo.products} />
        </Grid>
        <Grid item md={9}>
          <Grid container spacing={4}>
            <Grid item md={12}>
              <ProductsTitle categoryTitle={productInfo.name} />
            </Grid>
            <Grid item md={12} marginLeft="18px">
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
