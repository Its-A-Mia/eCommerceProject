import { Container, Box } from "@mui/material";
import Head from "next/head";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>eCommerce Site</title>
        <meta name="description" content="eCommerce practice site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center">
          <main style={{ width: "100%", display: "inherit", justifyContent: "inherit" }}>
            {children}
          </main>
        </Box>
      </Container>
      <footer></footer>
    </>
  );
}
