import { Grid, Box, Divider, TextField, Icon } from "@mui/material";
import { Container } from "@mui/system";
import eShopLogo from "../public/images/eShop.png";
import Link from "next/link";
import Image from "next/image";
import navBarStyles from "../styles/utils.module.css";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useState, useEffect } from "react";

export default function NavBar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let userToken = "userToken";

  useEffect(() => {
    // grab all cookies
    const cookies = document.cookie;
    // parse cookies
    const parsedCookies = cookies.split(";").map((cookie) => cookie.split("="));

    // if userToken is in cookies, grab it
    for (let i = 0; i < parsedCookies.length; i++) {
      if (parsedCookies[i][0] === userToken) {
        userToken = parsedCookies[i][1];
        console.log("grabbed userToken");
      }
    }

    // then switch isLoggedIn state depending on result
    if (isLoggedIn === false) {
      // this state locks in the profile button until token expires
      if (userToken !== "userToken") {
        setIsLoggedIn(true);
      }
    }
  });

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
                <Link
                  href={isLoggedIn ? "/protected/profile" : "/auth"}
                  className={navBarStyles.NavBarlinkStyleAlternative}
                >
                  {isLoggedIn ? "Profile" : "Sign In / Register"}
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link href="/protected/orders" className={navBarStyles.NavBarlinkStyleAlternative}>
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
