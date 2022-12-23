import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import headerStyles from "../styles/Utils.module.css";
import { Typography, Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function () {
  // iterate through to create category buttons using an array of categories
  const createCategoryButtons = (categoryArr) => {
    let categoryCards = [];
    for (let i = 0; i < categoryArr.length; i++) {
      categoryCards.push(
        <Grid item xs={12} sm={6} md={4} className={homeStyles.categoryGrid}>
          <Button
            href={categoryArr[i].href}
            className={`${categoryArr[i].style}`}
            variant="contained"
            fullWidth
            size="large"
          >
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
      href: "/products/tops/t-shirts",
      style: `${homeStyles.categoriesButton}`,
    },
    {
      category: "Sweaters",
      href: "/products/tops/sweaters",
      style: `${homeStyles.categoriesButton}`,
    },
    {
      category: "Hoodies",
      href: "/products/tops/hoodies",
      style: `${homeStyles.categoriesButton}`,
    },
    {
      category: "Sweatpants",
      href: "/products/bottoms/sweatpants",
      style: `${homeStyles.categoriesButton}`,
    },
    {
      category: "Jeans",
      href: "/products/bottoms/jeans",
      style: `${homeStyles.categoriesButton}`,
    },
    {
      category: "Shoes",
      href: "/products/bottoms/shoes",
      style: `${homeStyles.categoriesButton}`,
    },
  ];

  console.log(headerStyles.categoriesButton);

  //construct categories
  let categoryButtonArr = createCategoryButtons(categoryArr);

  return (
    <>
      <Grid container spacing={2} marginTop="60px">
        {categoryButtonArr}
      </Grid>
    </>
  );
}
