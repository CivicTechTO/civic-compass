import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { HeaderNavigation } from "../src/components/HeaderNavigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Civic Compass</title>
        <meta name="description" content="TODO: replace this" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Container maxW="container.xl">
          <HeaderNavigation />
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
