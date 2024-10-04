import { PropsWithChildren, ReactNode } from "react";

export interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imgClassName: string;
  currentStep: number;
  onClick: () => void;
}
export interface HowToCardProps extends PropsWithChildren {
  className?: string;
  imgClassName: string;
  even: boolean;
  onClick: () => void;
}

export interface CardItems {
  title: string;
  description: string;
  icons: ReactNode;
}
