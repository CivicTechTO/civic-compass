import { Box, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import * as React from "react";
import { OPTIONS_PER_QUESTION } from "../lib/constants";
import { useQuiz } from "../lib/useQuiz";
import { ICandidate } from "../types";

interface Props {
  candidate: ICandidate;
}

export const CandidateComparison: React.VFC<Props> = ({ candidate }) => {
  const { quiz, answers } = useQuiz();
  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <Th>Question</Th>
            <Th>You</Th>
            <Th>{candidate.description.name}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {quiz?.questions.map((question, index) => {
            return (
              <Tr key={question.id}>
                <Td>
                  {question.question}
                  {question.maximaLabels && (
                    <Text fontSize="xs">
                      {question.maximaLabels.min} (0) -{" "}
                      {question.maximaLabels.max} ({OPTIONS_PER_QUESTION})
                    </Text>
                  )}
                </Td>
                <Td>{answers[index]}</Td>
                <Td>{candidate.answers[index]}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};
