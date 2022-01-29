import { Box, Container } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

const About: NextPage = () => {
  return (
    <div>
      <Container maxW="container.xl">
        <Heading as="h1" size="xl">
          About us
        </Heading>
        <Text>
          Civic Compass is an open-source application to help engage citizens in
          local elections by helping them better understand their candidates.
        </Text>
      </Container>
    </div>
  );
};

export default About;
