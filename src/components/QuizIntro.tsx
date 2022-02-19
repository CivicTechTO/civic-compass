import * as React from "react";

import { Box } from "@chakra-ui/layout";
import { Button, Center, Heading, Text } from "@chakra-ui/react";

import { IQuiz } from "../types";
import { useQuiz } from "../lib/useQuiz";

export const QuizIntro: React.VFC = () => {
  const { quiz, setCurrentQuestion } = useQuiz();

  if (!quiz) {
    return null;
  }

  return (
    <Box>
      <Heading as="h2" size="l">
        {quiz.name}
      </Heading>
      <Center>
        <Button onClick={() => setCurrentQuestion(0)}>Start</Button>
      </Center>
    </Box>
  );
};
