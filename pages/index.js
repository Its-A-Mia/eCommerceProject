import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import headerStyles from "../styles/Headings.module.css";
import { Typography, Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function () {
  //   const buttonBackground = (bgStyle) => {
  //     const bg = `${homeStyles.categoriesButton} ${bgStyle}`;
  //     console.log(bg);
  //     return bg;
  //   };

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
      href: "work-in-progress",
      style: `${homeStyles.categoriesButton}`,
    },
    {
      category: "Sweaters",
      href: "work-in-progress",
      style: `${homeStyles.categoriesButton} ${homeStyles.tShirtBackground}`,
    },
    {
      category: "Hoodies",
      href: "work-in-progress",
      style: `${homeStyles.categoriesButton} ${homeStyles.tShirtBackground}`,
    },
    {
      category: "Sweatpants",
      href: "work-in-progress",
      style: `${homeStyles.categoriesButton} ${homeStyles.tShirtBackground}`,
    },
    {
      category: "Jeans",
      href: "work-in-progress",
      style: `${homeStyles.categoriesButton} ${homeStyles.tShirtBackground}`,
    },
    {
      category: "Shoes",
      href: "work-in-progress",
      style: `${homeStyles.categoriesButton} ${homeStyles.tShirtBackground}`,
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
