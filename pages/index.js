import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import headerStyles from "../styles/Headings.module.css";
import { Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";

export default function () {
  return (
    <>
      {/* <Head>
        <title></title>
      </Head> */}
      <main>
        <Typography variant="h1" align="center" className={headerStyles.h1}>
          eCommerce: One Stop Shop
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center" className={headerStyles.h2}>
              Categories
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button href="/work-in-progress" variant="contained" fullWidth size="large">
              T-Shirts
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button href="/work-in-progress" variant="contained" fullWidth size="large">
              Sweaters
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button href="/work-in-progress" variant="contained" fullWidth size="large">
              Hoodies
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button href="/work-in-progress" variant="contained" fullWidth size="large">
              Sweatpants
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button href="/work-in-progress" variant="contained" fullWidth size="large">
              Jeans
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button href="/work-in-progress" variant="contained" fullWidth size="large">
              Shoes
            </Button>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
