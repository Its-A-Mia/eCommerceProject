import { Container, Box, Typography, Icon } from "@mui/material";
import Head from "next/head";
import NavBar from "./NavBar";
import AppBarNav from "./AppBarNav";
import favicon from "../public/favicon.ico";
import Link from "next/link";
import Image from "next/image";
import nextjslogo from "../public/images/nextjslogo.png";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>eCommerce Site</title>
        <meta name="description" content="eCommerce practice site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>
      <header>
        <Box display="flex" flexDirection="column">
          <NavBar />
          <AppBarNav />
        </Box>
      </header>
      <Container maxWidth="lg" sx={{ p: "20px 0 120px" }}>
        <Box display="flex" justifyContent="center">
          <main style={{ width: "100%", display: "inherit", justifyContent: "inherit" }}>
            {children}
          </main>
        </Box>
      </Container>
      <footer>
        <Box sx={{ background: "#5D82B3" }}>
          <Container
            maxWidth="lg"
            sx={{
              p: "20px 0 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" gap="10px" maxWidth="200px" alignItems="center">
              <Typography color="white">Built using</Typography>
              <Link href="https://nextjs.org/" style={{ textDecoration: "none", color: "white" }}>
                <Image src={nextjslogo.src} width={104} height={50} />
              </Link>
            </Box>
            <Box display="flex" alignItems="center" gap="5px">
              <CopyrightIcon fontSize="small" sx={{ color: "white" }} />
              <Typography color="white">Mia Purdun 2022</Typography>
            </Box>

            <Link
              href="https://github.com/Its-A-Mia/eCommerceProject"
              style={{ textDecoration: "none", color: "white" }}
            >
              My GitHub
            </Link>
          </Container>
        </Box>
      </footer>
    </>
  );
}
