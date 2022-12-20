import { Grid, Box, Divider, TextField, Icon } from "@mui/material";
import { Container } from "@mui/system";
import eShopLogo from "../images/eShop.png";
import Link from "next/link";
import Image from "next/image";
import navBarStyles from "../styles/NavBar.module.css";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export default function () {
  const hiddenOnMobile = {
    display: { xs: "none", sm: "none", md: "flex" },
  };

  return (
    <>
      <Box bgcolor="#EEEEEE">
        <Container>
          <Grid container spacing={3} p="20px">
            <Grid item xs={12} sx={hiddenOnMobile} justifyContent="flex-end">
              <Box display="flex" gap="30px">
                <Link href="/work-in-progress" className={navBarStyles.linkStyle}>
                  While Supplies Last
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress" className={navBarStyles.linkStyle}>
                  What's New
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress" className={navBarStyles.linkStyle}>
                  Same-Day
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress" className={navBarStyles.linkStyle}>
                  Online-Only
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress" className={navBarStyles.linkStyle}>
                  Email Offers
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress" className={navBarStyles.linkStyle}>
                  Customer Service
                </Link>
              </Box>
            </Grid>
            <Grid item xs={4} md={2} display="flex" justifyContent="center" alignItems="center">
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
                <Link href="/auth" className={navBarStyles.linkStyleAlternative}>
                  Sign In / Register
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/work-in-progress" className={navBarStyles.linkStyleAlternative}>
                  Orders
                </Link>

                <Divider orientation="vertical" flexItem />
                <Box display="flex" alignItems="center" justifyContent="center">
                  <ShoppingCartSharpIcon fontSize="small" sx={{ color: "#5d82b3" }} />
                  <Link href="/cart" className={navBarStyles.linkStyleAlternative}>
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
