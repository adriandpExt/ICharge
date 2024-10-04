import { CardItems, StepCardProps } from "./type";

import {
  Award,
  BatteryCharging,
  ScanLine,
  SlidersVertical,
} from "lucide-react";

export const cardItems: CardItems[] = [
  {
    title: "App",
    description: "Download icharge App",
    icons: <Award size={40} color="green" />,
  },
  {
    title: "Scan",
    description: "Scan the QR code on the charging station",
    icons: <ScanLine size={40} color="green" />,
  },
  {
    title: "Charge",
    description: "Enjoy charging",
    icons: <BatteryCharging size={40} color="green" />,
  },
  {
    title: "Return",
    description: "Return the powerbank to the station",
    icons: <SlidersVertical size={40} color="green" />,
  },
];

export const handleLenght = (step: number) => {
  if (step === 1) {
    return {
      item: "items-end",
      height: "h-1/2",
    };
  } else if (step === 4) {
    return {
      item: "items-start",
      height: "h-1/2",
    };
  } else {
    return {
      item: "items-center",
      height: "h-full",
    };
  }
};

export const stepCard: Omit<StepCardProps, "currentStep" | "onClick">[] = [
  {
    stepNumber: 1,
    title: "Scan",
    description:
      "Scan QR code provided at any icharge stations to start your rental.",
    imgClassName: "bg-[url('@/assets/timeline1.png')]",
  },
  {
    stepNumber: 2,
    title: "Top up",
    description: "Top up your credit using Maya and Gcash.",
    imgClassName: "bg-[url('@/assets/timeline2.png')]",
  },
  {
    stepNumber: 3,
    title: "Charge",
    description:
      "Get the powerbank from the machine and charge your device whenever you want.",
    imgClassName: "bg-[url('@/assets/timeline3.png')]",
  },
  {
    stepNumber: 4,
    title: "Return",
    description:
      "Return by inserting the powerbank in position to an empty slot at any machine near you.",
    imgClassName: "bg-[url('@/assets/timeline4.png')]",
  },
];
