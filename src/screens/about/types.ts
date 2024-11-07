export interface SummaryCardAppearance {
  stepSummary: SumStep;
  sideBg: string;
  mobileBg: string;
  isFlipped: boolean;
}

export interface SumStep {
  SumImage: string;
  SumImageMobile: string;
  header: string;
  desc: string;
  list: string[];
}

export interface CertImage {
  imageName: string;
  imageHeight: string;
  imageWidth: string;
}

export interface CertImageMobile {
  imageName: string;
  imageHeight: string;
  imageWidth: string;
}