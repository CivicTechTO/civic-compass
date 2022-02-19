export interface IQuestion {
  id: string;
  question: string;
  maximaLabels?: {
    min: string;
    max: string;
  };
}

export interface IQuiz {
  name: string;
  questions: IQuestion[];
}

export interface ICandidate {
  id: string;
  description: {
    name: string;
  };
  answers: number[];
}
