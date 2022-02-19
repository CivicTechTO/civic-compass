import { Box, Container } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import { Quiz } from "../src/components/Quiz";
import { QuizProvider, useQuiz } from "../src/lib/useQuiz";

const ExampleQuiz: NextPage = () => {
  return (
    <QuizProvider>
      <Container maxW="container.xl">
        <Heading as="h1" size="xl">
          Example Quiz
        </Heading>
        <Quiz />
      </Container>
    </QuizProvider>
  );
};

export default ExampleQuiz;
