import { Container } from "@mui/material";
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
        <main>{children}</main>
      </Container>
      <footer></footer>
    </>
  );
}
