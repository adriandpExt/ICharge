export interface Summary {
  stepSummary: SummaryStep;
  sideBg: string;
  flip?: boolean;
}
export interface SummaryStep {
  title: string;
  subTitle: string;
  description: string[];
}
export interface CertificationType {
  title: string;
  description: string;
  benefit: string;
}
