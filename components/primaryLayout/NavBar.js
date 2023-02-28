import { Grid, Box, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import eShopLogo from '../../public/images/eShop.png';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';
import NavOptions from './NavOptions';

export default function NavBar(props) {
  const mobileMediaQuery = useMediaQuery('(max-width: 600px');

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
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              sx={visibleOnMobile}
            >
              <NavOptions />
            </Grid>

            <Grid item xs={4} md={4} lg={2} display="flex" justifyContent="left" alignItems="center">
              <Link href="/">
                <Image src={eShopLogo} width={mobileMediaQuery ? 100 : 150} alt="eShop Logo" />
              </Link>
            </Grid>

            <Grid item xs={8} md={8} lg={5}>
              <Search />
            </Grid>

            <Grid item lg={5} display="flex" justifyContent="flex-end" alignItems="center" sx={hiddenOnMobile}>
              <NavOptions />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
