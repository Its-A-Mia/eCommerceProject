import tShirtBG from "../public/images/tshirts.png";
import hoodiesBG from "../public/images/hoodies.png";
import jeansBG from "../public/images/jeans.png";
import shoesBG from "../public/images/shoes.png";
import sweatersBG from "../public/images/sweaters.png";
import sweatpantsBG from "../public/images/sweatpants.png";

import homeStyles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

// background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;

export default function home() {
  // iterate through to create category buttons using an array of categories
  const createCategoryButtons = (categoryArr) => {
    let categoryCards = [];
    for (let i = 0; i < categoryArr.length; i++) {
      categoryCards.push(
        <Grid key={i} item xs={12} sm={6} md={4} className={homeStyles.categoryGrid}>
          <Button
            href={categoryArr[i].href}
            className={`${categoryArr[i].style}`}
            variant="contained"
            fullWidth
            size="large"
          >
            <div
              className={homeStyles.categoriesButtonBackground}
              style={{
                backgroundImage: `url(${categoryArr[i].backgroundImagePath.src})`,
              }}
            ></div>
            {categoryArr[i].category}
          </Button>
        </Grid>
      );
    }
    return categoryCards;
  };

  // array of categories to create
  let categoryArr = [
    {
      category: "T-Shirts",
      href: "/products/tops/tshirts",
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: tShirtBG,
    },
    {
      category: "Sweaters",
      href: "/products/tops/sweaters",
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: sweatersBG,
    },
    {
      category: "Hoodies",
      href: "/products/tops/hoodies",
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: hoodiesBG,
    },
    {
      category: "Sweatpants",
      href: "/products/bottoms/sweatpants",
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: sweatpantsBG,
    },
    {
      category: "Jeans",
      href: "/products/bottoms/jeans",
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: jeansBG,
    },
    {
      category: "Shoes",
      href: "/products/bottoms/shoes",
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: shoesBG,
    },
  ];

  //construct categories
  let categoryButtonArr = createCategoryButtons(categoryArr);

  return (
    <>
      <Grid container spacing={2} marginTop="40px">
        {categoryButtonArr}
      </Grid>
    </>
  );
}
