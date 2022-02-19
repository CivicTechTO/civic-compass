import { ICandidate, IQuiz } from "../types";

export const fakeQuiz: IQuiz = {
  name: "An example quiz about food!",
  questions: [
    { id: "1", question: "Pizza is tasty" },
    {
      id: "2",
      question: "Burgers should be",
      maximaLabels: { min: "Wider", max: "Taller" },
    },
    {
      id: "3",
      question: "Ramen is a wonderful dish",
    },
  ],
};

export const HomerSimpson: ICandidate = {
  id: "HomerSimpson",
  description: {
    name: "Homer Simpson",
  },
  answers: [10, 10, 10],
};

export const MargeSimpson: ICandidate = {
  id: "MargeSimpson",
  description: {
    name: "Marge Simpson",
  },
  answers: [0, 0, 0],
};

export const BartSimpson: ICandidate = {
  id: "BartSimpson",
  description: {
    name: "Bart Simpson",
  },
  answers: [10, 0, 2],
};

export const LisaSimpson: ICandidate = {
  id: "LisaSimpson",
  description: {
    name: "Lisa Simpson",
  },
  answers: [6, 5, 10],
};
