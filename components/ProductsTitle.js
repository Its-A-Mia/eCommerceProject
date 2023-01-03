import {
  Typography,
  Grid,
  Select,
  FormControl,
  InputLabel,
  Box,
  Divider,
  MenuItem,
} from "@mui/material";
import WindowIcon from "@mui/icons-material/Window";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import utilStyles from "../styles/utils.module.css";
import { useState } from "react";

export default function ProductsTitle(props) {
  const [sortBy, setSortBy] = useState("Best Match");

  // category name, sort by, chips, grid/tile view, showing n1-n^n

  return (
    <>
      <Typography variant="h2" sx={{ fontSize: "2rem", padding: "none" }}>
        {props.categoryTitle}
      </Typography>
      <Grid container spacing={2} paddingTop="25px">
        <Grid item md={6} display="flex" alignItems="center">
          <Box width="25%">
            <Typography component="span" sx={{ fontSize: "1.2rem", width: "auto", flexGrow: "2" }}>
              Sort by:
            </Typography>
          </Box>

          <FormControl fullWidth>
            <InputLabel id="sort-by-selection"></InputLabel>
            <Select
              className={utilStyles.selectStyle}
              labelId="sort-by-selection"
              id="sort-by-selection"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="Best Match">Best Match</MenuItem>
              <MenuItem value="Price (High to Low)">Price (High to Low)</MenuItem>
              <MenuItem value="Price (Low to High)">Price (Low to High)</MenuItem>
              <MenuItem value="Ratings (High to Low)">Ratings (High to Low)</MenuItem>
              <MenuItem value="Newest">Newest</MenuItem>
              <MenuItem value="Most Viewed">Most Viewed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} display="flex" justifyContent="flex-end" alignItems="center">
          <WindowIcon fontSize="large" />
          <Divider
            orientation="vertical"
            sx={{ padding: "5px", maxHeight: "20px", marginRight: "10px" }}
          />
          <ViewStreamIcon fontSize="large" />
        </Grid>
      </Grid>
    </>
  );
}
