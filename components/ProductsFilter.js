import { List, Typography, Grid, Button, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterActions } from "../store/filter-slice";
import FilterOption from "./FilterOption";

export default function FilterProducts() {
  const dispatch = useDispatch();
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
          <Button
            variant="contained"
            onClick={() => dispatch(filterActions.clearFilter())}
            sx={{ maxHeight: "40px", fontSize: "x-small" }}
          >
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
        <FilterOption listTitle="Rating" options={[1, 2, 3, 4, 5]} />

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
