import { Grid, Box, Divider } from '@mui/material';
import { Container } from '@mui/system';
import eShopLogo from '../../public/images/eShop.png';
import Link from 'next/link';
import Image from 'next/image';
import navBarStyles from '../../styles/utils.module.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useState, useEffect } from 'react';
import Search from './Search';

export default function NavBar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // grab all cookies
    const cookies = document.cookie;
    // parse cookies
    const parsedCookies = cookies.split('; ').map((cookie) => cookie.split('='));

    let sessionActive = 'sessionActive';

    // if sessionActive is in cookies, grab it
    for (let i = 0; i < parsedCookies.length; i++) {
      if (parsedCookies[i][0] === sessionActive) {
        sessionActive = parsedCookies[i][1];
      }
    }

    // then switch isLoggedIn state depending on result
    if (isLoggedIn === false) {
      // this state locks in the profile button until token expires
      if (sessionActive !== 'sessionActive') {
        setIsLoggedIn(true);
      }
    }
  }, [isLoggedIn]);

  const hiddenOnMobile = {
    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
  };

  const visibleOnMobile = {
    display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' },
  };

  return (
    <>
      <Box bgcolor="#EEEEEE">
        <Container>
          <Grid container spacing={3} paddingTop="20px" paddingBottom="20px">
            <Grid item xs={5} sm={3} md={2} lg={2} display="flex" justifyContent="left" alignItems="center">
              <Link href="/">
                <Image src={eShopLogo} width={150} alt="eShop Logo" />
              </Link>
            </Grid>
            <Search />
            <Grid item lg={5} display="flex" justifyContent="flex-end" alignItems="center" sx={hiddenOnMobile}>
              <Box display="flex" gap="50px">
                <Link
                  href={isLoggedIn ? '/protected/profile' : '/auth'}
                  className={navBarStyles.NavBarlinkStyleAlternative}
                >
                  {isLoggedIn ? 'Profile' : 'Sign In / Register'}
                </Link>
                <Divider orientation="vertical" flexItem />
                <Link
                  onClick={() => (document.cookie = `authRedirectPath=protected/orders;secure;samesite=lax`)}
                  href="/protected/orders"
                  className={navBarStyles.NavBarlinkStyleAlternative}
                >
                  Orders
                </Link>
                <Divider orientation="vertical" flexItem />
                <Box>
                  <Link
                    href="/cart"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    className={navBarStyles.NavBarlinkStyleAlternative}
                  >
                    <ShoppingCartSharpIcon fontSize="small" sx={{ color: '#5d82b3' }} />
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
