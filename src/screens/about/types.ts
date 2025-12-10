import { PropsWithChildren } from "react";

export interface ISummaryCard {
  summaryData: SumStep;
  isFlipped: boolean;
}

export interface ISection extends PropsWithChildren {
  icon: string;
  title?: string;
  isFlipped?: boolean;
}

export interface SumStep {
  SumImage: string;
  SumImageMobile: string;
  header: string;
  desc: string;
  footnote: string[];
}