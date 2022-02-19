import { Box, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import * as React from "react";
import { calculateOverallAffinity } from "../lib/affinityCalculator";
import { useQuiz } from "../lib/useQuiz";
import { ICandidate } from "../types";
import { CandidateComparison } from "./CandidateComparison";

interface Props {
  candidate: ICandidate;
}
export const CandidateAffinity: React.VFC<Props> = ({ candidate }) => {
  const { answers } = useQuiz();
  const { description } = candidate;
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <Box>
      <Heading as="h4" size="md">
        {description.name}
      </Heading>
      <Box>
        Agreement score: {calculateOverallAffinity(answers, candidate.answers)}%
      </Box>
      <Box mb={3}>
        <Button onClick={() => setShowDetails(!showDetails)}>Details</Button>
        {showDetails && <CandidateComparison candidate={candidate} />}
      </Box>
    </Box>
  );
};
