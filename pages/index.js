import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import headerStyles from "../styles/Headings.module.css";
import { Typography, Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function () {
  const buttonBackground = (bgStyle) => {
    const bg = `${homeStyles.categoriesButton} ${bgStyle}`;
    console.log(bg);
    return bg;
  };
  return (
    <>
      {/* <Head>
        <title></title>
      </Head> */}
      <main>
        <Grid container spacing={2} marginTop="60px">
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              href="/work-in-progress"
              variant="contained"
              fullWidth
              size="large"
              className={buttonBackground(homeStyles.tShirtBackground)}
            >
              T-Shirts
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              href="/work-in-progress"
              variant="contained"
              fullWidth
              size="large"
              className={homeStyles.categoriesButton}
            >
              Sweaters
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              href="/work-in-progress"
              variant="contained"
              fullWidth
              size="large"
              className={homeStyles.categoriesButton}
            >
              Hoodies
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              href="/work-in-progress"
              variant="contained"
              fullWidth
              size="large"
              className={homeStyles.categoriesButton}
            >
              Sweatpants
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              href="/work-in-progress"
              variant="contained"
              fullWidth
              size="large"
              className={homeStyles.categoriesButton}
            >
              Jeans
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              href="/work-in-progress"
              variant="contained"
              fullWidth
              size="large"
              className={homeStyles.categoriesButton}
            >
              Shoes
            </Button>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
