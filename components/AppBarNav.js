import { Box } from "@mui/material/";
import { Container } from "@mui/system";
import Link from "next/link";
import appBarNavStyles from "../styles/utils.module.css";

export default function AppBarNav() {
  const hiddenOnMobile = {
    display: { xs: "none", sm: "none", md: "flex" },
  };

  return (
    <>
      <Box bgcolor="#5D82B3">
        <Container>
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            gap="5%"
            padding="12px"
            sx={hiddenOnMobile}
          >
            <Link href="/products/tops" className={appBarNavStyles.AppBarlinkStyle}>
              Tops
            </Link>

            <Link href="/products/bottoms" className={appBarNavStyles.AppBarlinkStyle}>
              Bottoms
            </Link>

            <Link href="/products/bottoms/shoes" className={appBarNavStyles.AppBarlinkStyle}>
              Shoes
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.AppBarlinkStyle}>
              Winter
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.AppBarlinkStyle}>
              Deals
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.AppBarlinkStyle}>
              Services
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.AppBarlinkStyle}>
              Membership
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.AppBarlinkStyle}>
              Locations
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}
