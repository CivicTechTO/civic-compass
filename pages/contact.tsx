import { Box, Container } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

const About: NextPage = () => {
  return (
    <div>
      <Container maxW="container.xl">
        <Heading as="h1" size="xl">
          Contact
        </Heading>
        <Text>
          Here is where we would have some information about how to contact us
        </Text>
      </Container>
    </div>
  );
};

export default About;
