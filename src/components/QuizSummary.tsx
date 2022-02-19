import * as React from "react";

import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

import { useQuiz } from "../lib/useQuiz";
import { CandidateAffinity } from "./CandidateAffinity";

export const QuizSummary: React.VFC = () => {
  const { quiz, candidates } = useQuiz();

  if (!quiz) {
    return null;
  }

  return (
    <Box>
      <Heading>{quiz.name}</Heading>

      {candidates.map((candidate) => (
        <CandidateAffinity key={candidate.id} candidate={candidate} />
      ))}
    </Box>
  );
};
