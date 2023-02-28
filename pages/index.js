import tShirtBG from '../public/images/tshirts.jpg';
import hoodiesBG from '../public/images/hoodies.jpg';
import jeansBG from '../public/images/jeans.jpg';
import shoesBG from '../public/images/shoes.jpg';
import sweatersBG from '../public/images/sweaters.jpg';
import sweatpantsBG from '../public/images/sweatpants.jpg';

import homeStyles from '../styles/Home.module.css';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

// background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;

export default function home() {
  // array of categories to create
  let categoryArr = [
    {
      category: 'T-Shirts',
      href: '/products/tops/shirts',
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: tShirtBG,
    },
    {
      category: 'Sweaters',
      href: '/products/tops/sweaters',
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: sweatersBG,
    },
    {
      category: 'Hoodies',
      href: '/products/tops/hoodies',
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: hoodiesBG,
    },
    {
      category: 'Sweatpants',
      href: '/products/bottoms/sweatpants',
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: sweatpantsBG,
    },
    {
      category: 'Jeans',
      href: '/products/bottoms/jeans',
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: jeansBG,
    },
    {
      category: 'Shoes',
      href: '/products/bottoms/shoes',
      style: `${homeStyles.categoriesButton}`,
      backgroundImagePath: shoesBG,
    },
  ];

  return (
    <>
      <Grid container spacing={2} marginTop="40px">
        {/* construct category buttons */}
        {categoryArr.map((category, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} className={homeStyles.categoryGrid}>
            <Button href={category.href} className={`${category.style}`} variant="contained" fullWidth size="large">
              <div
                className={homeStyles.categoriesButtonBackground}
                style={{
                  backgroundImage: `url(${category.backgroundImagePath.src})`,
                }}
              ></div>
              {category.category}
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
