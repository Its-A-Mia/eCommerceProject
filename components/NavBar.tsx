import { AppBar, Grid, Box, Divider } from "@mui/material";
import Link from "next/link";

export default function () {
  return (
    <>
      <Box display="flex" justifyContent="center" bgcolor="gray">
        <Grid container spacing={5} width="72.5%">
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" gap="50px">
              <Link href="/work-in-progress">Link</Link>
              <Divider orientation="vertical" flexItem />
              <Link href="/work-in-progress">Link</Link>
              <Divider orientation="vertical" flexItem />
              <Link href="/work-in-progress">Link</Link>
              <Divider orientation="vertical" flexItem />
              <Link href="/work-in-progress">Link</Link>
              <Divider orientation="vertical" flexItem />
              <Link href="/work-in-progress">Link</Link>
              <Divider orientation="vertical" flexItem />
              <Link href="/work-in-progress">Link</Link>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <div>Logo</div>
          </Grid>
          <Grid item xs={6}>
            <div>Search Bar</div>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="flex-end" gap="50px">
              <Link href="/work-in-progress">Link</Link>
              <Divider orientation="vertical" flexItem />
              <Link href="/work-in-progress">Link</Link>
              <Divider orientation="vertical" flexItem />
              <Link href="/work-in-progress">Link</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
