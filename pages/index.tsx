import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Box>
      <Box my={40}>
        <Heading as="h1" size="4xl">
          Civic Compass
        </Heading>
        <Heading as="h2" size="xl">
          Helping you understand your local elections
        </Heading>
      </Box>
    </Box>
  );
};

export default Home;
