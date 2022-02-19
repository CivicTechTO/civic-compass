import * as React from "react";
import { ICandidate, IQuiz } from "../types";
import { QUIZ_BEGIN_POSITION, QUIZ_END_POSITION } from "./constants";
import {
  BartSimpson,
  fakeQuiz,
  HomerSimpson,
  LisaSimpson,
  MargeSimpson,
} from "./fakeData";

interface IQuizContext {
  quiz?: IQuiz;
  candidates: ICandidate[];
  currentQuestion?: number;
  setCurrentQuestion(newQuestion?: number): void;
  nextQuestion(): void;
  answers: number[];
  setAnswers(answers: number[]): void;
}

const QuizContext = React.createContext<IQuizContext>({
  answers: [],
  candidates: [],
  setCurrentQuestion: () => {},
  setAnswers: () => {},
  nextQuestion: () => {},
});

export const QuizProvider: React.FC = ({ children }) => {
  const [quiz, setQuiz] = React.useState<IQuiz>(fakeQuiz);
  const candidates: ICandidate[] = [
    HomerSimpson,
    MargeSimpson,
    BartSimpson,
    LisaSimpson,
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState<
    number | undefined
  >(QUIZ_BEGIN_POSITION);
  const [answers, setAnswers] = React.useState<number[]>([]);

  const nextQuestion = React.useCallback(() => {
    switch (currentQuestion) {
      case QUIZ_BEGIN_POSITION:
        return setCurrentQuestion(0);
      case quiz.questions.length - 1:
        return setCurrentQuestion(QUIZ_END_POSITION);
      default:
        setCurrentQuestion(currentQuestion + 1);
    }
  }, [currentQuestion, quiz.questions.length]);

  return (
    <QuizContext.Provider
      value={{
        quiz,
        currentQuestion,
        setCurrentQuestion,
        answers,
        setAnswers,
        nextQuestion,
        candidates,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => React.useContext(QuizContext);
