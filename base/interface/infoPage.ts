export interface ITerms {
  title: string;
  content:  { html: string };
  date: string;
}

export interface ITermsData {
  termsAndConditions: ITerms[];
}

export interface IPrivacyData {
  privacyPolicies: ITerms[];
}