import { OPTIONS_PER_QUESTION } from "./constants";

export const calculateOverallAffinity = (
  userAnswers: number[],
  candidateAnswers: number[]
): number => {
  const affinityPerQuestion = userAnswers.map((userAnswer, index) => {
    const candidateAnswer = candidateAnswers[index];
    const distanceFromSelection = Math.abs((userAnswer = candidateAnswer));
    return distanceFromSelection;
  });

  const totalAffinity = affinityPerQuestion.reduce((pv, cv) => pv + cv, 0);

  const averageAffinityAcrossAllQuestions = totalAffinity / userAnswers.length;
  const affinity =
    (OPTIONS_PER_QUESTION - averageAffinityAcrossAllQuestions) /
    OPTIONS_PER_QUESTION;

  return affinity * 100;
};
