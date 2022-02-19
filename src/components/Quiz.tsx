import { Box } from "@chakra-ui/layout";
import * as React from "react";
import { QUIZ_BEGIN_POSITION, QUIZ_END_POSITION } from "../lib/constants";
import { useQuiz } from "../lib/useQuiz";
import { IQuiz } from "../types";
import { Question } from "./Question";
import { QuizIntro } from "./QuizIntro";
import { QuizSummary } from "./QuizSummary";

export const Quiz: React.VFC = () => {
  const { quiz, currentQuestion, answers, setAnswers } = useQuiz();

  if (!quiz) {
    return null;
  }

  switch (currentQuestion) {
    case QUIZ_BEGIN_POSITION:
      return <QuizIntro />;
    case QUIZ_END_POSITION:
      return <QuizSummary />;
    default:
      return <Question />;
  }
};
