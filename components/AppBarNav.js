import { Box } from "@mui/material/";
import { Container } from "@mui/system";
import Link from "next/link";
import appBarNavStyles from "../styles/AppBarNav.module.css";

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
            <Link href="/work-in-progress" className={appBarNavStyles.linkStyle}>
              Tops
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.linkStyle}>
              Bottoms
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.linkStyle}>
              Intimates
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.linkStyle}>
              Shoes
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.linkStyle}>
              Winter
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.linkStyle}>
              Deals
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.linkStyle}>
              Services
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.linkStyle}>
              Membership
            </Link>

            <Link href="/work-in-progress" className={appBarNavStyles.linkStyle}>
              Locations
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}
