import { Grid, Box, Divider, TextField, Icon } from "@mui/material";
import { Container } from "@mui/system";
import eShopLogo from "../public/images/eShop.png";
import Link from "next/link";
import Image from "next/image";
import navBarStyles from "../styles/Utils.module.css";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export default function NavBar() {
  const hiddenOnMobile = {
    display: { xs: "none", sm: "none", md: "flex" },
  };

  return (
    <>
      <Box bgcolor="#EEEEEE">
        <Container>
          <Grid container spacing={3} paddingTop="20px" paddingBottom="20px">
            <Grid item xs={4} md={2} display="flex" justifyContent="left" alignItems="center">
              <Link href="/">
                <Image src={eShopLogo} width={150} alt="eShop Logo" />
              </Link>
            </Grid>
            <Grid item md={5} sx={hiddenOnMobile}>
              <TextField
                id="filled-basic"
                label="Enter Item ID"
                fullWidth
                sx={{ background: "white" }}
              />
            </Grid>
            <Grid
              item
              xs={5}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              sx={hiddenOnMobile}
            >
              <Box display="flex" gap="50px">
                <Link href="/auth" className={navBarStyles.NavBarlinkStyleAlternative}>
                  Sign In / Register
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress" className={navBarStyles.NavBarlinkStyleAlternative}>
                  Orders
                </Link>

                <Divider orientation="vertical" flexItem />
                <Box display="flex" alignItems="center" justifyContent="center">
                  <ShoppingCartSharpIcon fontSize="small" sx={{ color: "#5d82b3" }} />
                  <Link href="/cart" className={navBarStyles.NavBarlinkStyleAlternative}>
                    Cart
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
