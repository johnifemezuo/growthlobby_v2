export interface IFaq {
  question: string;
  answer: string;
  id: string;
}

export interface IFaqData {
  faqs: IFaq[];
}