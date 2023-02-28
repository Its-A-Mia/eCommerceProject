import { Divider, Link } from '@mui/material';
import { Box } from '@mui/system';
import navOptionsStyles from './PrimaryLayout.module.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useState, useEffect } from 'react';

const NavOptions = () => {
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

  return (
    <Box className={navOptionsStyles.NavOptionsContainer}>
      <Link href={isLoggedIn ? '/protected/profile' : '/auth'} className={navOptionsStyles.NavBarlinkStyleAlternative}>
        {isLoggedIn ? 'Profile' : 'Sign In / Register'}
      </Link>
      <Divider orientation="vertical" flexItem />
      <Link
        onClick={() => (document.cookie = `authRedirectPath=protected/orders;secure;samesite=lax`)}
        href="/protected/orders"
        className={navOptionsStyles.NavBarlinkStyleAlternative}
      >
        Orders
      </Link>
      <Divider orientation="vertical" flexItem />
      <Box>
        <Link href="/cart" className={[navOptionsStyles.NavBarlinkStyleAlternative, navOptionsStyles.NavBarCartLink]}>
          <ShoppingCartSharpIcon fontSize="small" sx={{ color: '#5d82b3' }} />
          Cart
        </Link>
      </Box>
    </Box>
  );
};

export default NavOptions;
