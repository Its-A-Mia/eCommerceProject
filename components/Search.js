import { Grid, TextField } from "@mui/material";

export default function Search() {
  const hiddenOnMobile = {
    display: { xs: "none", sm: "none", md: "flex" },
  };

  return (
    <>
      <Grid item md={5} sx={hiddenOnMobile}>
        <TextField id="filled-basic" label="Enter Item ID" fullWidth sx={{ background: "white" }} />
      </Grid>
    </>
  );
}
