import * as React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import FilterOption from "./FilterOption";

export default function FilterProducts() {
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openPrice, setOpenPrice] = React.useState(false);
  const [openBrand, setOpenBrand] = React.useState(false);
  const [openColor, setOpenColor] = React.useState(false);
  const [openStyle, setOpenStyle] = React.useState(false);

  const handleClick = (toOpen) => {
    toOpen == "openCategory" ? setOpenCategory(!openCategory) : setOpenCategory(openCategory);
    toOpen == "openPrice" ? setOpenPrice(!openPrice) : setOpenPrice(openPrice);
    toOpen == "openBrand" ? setOpenBrand(!openBrand) : setOpenBrand(openBrand);
    toOpen == "openColor" ? setOpenColor(!openColor) : setOpenColor(openColor);
    toOpen == "openStyle" ? setOpenStyle(!openStyle) : setOpenStyle(openStyle);
  };

  // clear button, category section, delivery location, price, sizes, brand, color
  return (
    <>
      <Grid container spacing={1}>
        <Grid item md={6} display="flex" alignItems="center">
          <Typography variant="h4" fontSize="large">
            Filter Results
          </Typography>
        </Grid>
        <Grid item md={6} display="flex" alignItems="end" justifyContent="flex-end">
          <Button variant="contained" sx={{ maxHeight: "40px", fontSize: "x-small" }}>
            Clear All
          </Button>
        </Grid>
      </Grid>

      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="filter-subheader"
      >
        <FilterOption
          listTitle="Category"
          options={["Shirts", "Sweaters", "Hoodies", "Sweatpants", "Jeans", "Shoes"]}
        />

        <Divider />
        <FilterOption
          listTitle="Price"
          options={["$0 - $100", "$101 - $200", "$201 - $300", "$301 - $400", "$401 - $500"]}
        />

        <Divider />
        <FilterOption listTitle="Rating" options={["0", "1", "2", "3", "4", "5"]} />

        <Divider />
        <FilterOption
          listTitle="Color"
          options={["Red", "Blue", "Green", "Yellow", "Purple", "Brown", "Tan", "Pink", "Orange"]}
        />

        <Divider />
      </List>
    </>
  );
}
