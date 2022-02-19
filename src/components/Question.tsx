import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import * as React from "react";
import { useQuiz } from "../lib/useQuiz";

export const Question: React.VFC = () => {
  const { quiz, answers, setAnswers, currentQuestion, nextQuestion } =
    useQuiz();

  if (!quiz || currentQuestion === undefined) {
    return null;
  }

  const question = quiz.questions[currentQuestion];
  const answer = String(answers?.[currentQuestion]);

  const saveAnswer = (newValue: string) => {
    const mutableAnswers = [...answers];
    mutableAnswers[currentQuestion] = parseInt(newValue, 10);

    setAnswers(mutableAnswers);
  };

  const { min, max } = question.maximaLabels || {
    min: "Strongly Disagree",
    max: "Strongly Agree",
  };

  return (
    <Box>
      <Heading size="l" as="h3">
        {question.question}
      </Heading>
      <Flex my={8}>
        <Box>{min}</Box>
        <Box mx={8}>
          <RadioGroup onChange={saveAnswer} value={answer}>
            <Stack direction="row">
              <Radio value="0">0</Radio>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
              <Radio value="5">5</Radio>
              <Radio value="6">6</Radio>
              <Radio value="7">7</Radio>
              <Radio value="8">8</Radio>
              <Radio value="9">9</Radio>
              <Radio value="10">10</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box>{max}</Box>
      </Flex>
      <Button disabled={answer === undefined} onClick={nextQuestion}>
        Next
      </Button>
    </Box>
  );
};
