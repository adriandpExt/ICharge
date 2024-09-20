export interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imgClassName: string;
  currentStep: number;
  onClick: () => void;
}
export interface HowToCardProps {
  className?: string;
  imgClassName: string;
  even: boolean;
  onClick: () => void;
}
