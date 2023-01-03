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
        <ListItemButton onClick={() => handleClick("openCategory")}>
          <ListItemText primary="Category" />
          {openCategory ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCategory} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="test" />
          </List>
        </Collapse>
        <Divider />
        <ListItemButton onClick={() => handleClick("openPrice")}>
          <ListItemText primary="Price" />
          {openPrice ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openPrice} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="test" />
          </List>
        </Collapse>
        <Divider />
        <ListItemButton onClick={() => handleClick("openBrand")}>
          <ListItemText primary="Brand" />
          {openBrand ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openBrand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="test" />
          </List>
        </Collapse>
        <Divider />
        <ListItemButton onClick={() => handleClick("openColor")}>
          <ListItemText primary="Color" />
          {openColor ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openColor} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="test" />
          </List>
        </Collapse>
        <Divider />
        <ListItemButton onClick={() => handleClick("openStyle")}>
          <ListItemText primary="Style" />
          {openStyle ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openStyle} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText primary="test" />
          </List>
        </Collapse>
        <Divider />
      </List>
    </>
  );
}
