import ProductsFilter from "./ProductsFilter";
import ProductsTitle from "./ProductsTitle";
import { Breadcrumbs, Typography, Grid } from "@mui/material";

import utilStyles from "../styles/Utils.module.css";
import Link from "next/link";

export default function ProductsLayout({ children, productsPage }) {
  // Breadcrumbs for easy nav
  //   filter
  // category name, sort by, grid/list view, chips
  return (
    <>
      <Grid container spacing={2} paddingTop="20px">
        <Grid item xs={12} md={12}>
          <Breadcrumbs sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/" className={utilStyles.BreadcrumbsLinkStyle}>
              Home
            </Link>
            <Link
              href={`/products/${productsPage.path.toLowerCase()}`}
              className={utilStyles.BreadcrumbsLinkStyle}
            >
              {productsPage.path}
            </Link>
            <Typography className={utilStyles.BreadcrumbsProductName}>
              {productsPage.name}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item md={3}>
          <ProductsFilter />
        </Grid>
        <Grid item md={9}>
          <ProductsTitle categoryTitle={productsPage.name} />
        </Grid>

        {children}
      </Grid>
    </>
  );
}
