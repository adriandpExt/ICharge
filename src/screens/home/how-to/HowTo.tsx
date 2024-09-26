import { useState } from "react";
import { StepCardProps } from "./type";

import { PageContainer } from "@/components";
import { Label } from "@/components/ui/label";
import StepCard from "./components/StepCard";

const stepCard: Omit<StepCardProps, "currentStep" | "onClick">[] = [
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

const HowTo = () => {
  const [step, setStep] = useState(1);
  return (
    <PageContainer
      className="container mx-auto flex flex-col text-center dark:text-white"
      id="howToPage"
    >
      <div className="space-y-14 lg:space-y-28">
        <Label className="font-staatliches text-6xl dark:text-white">
          HOW TO USE ICHARGE?
        </Label>
        <div className="mx-auto flex w-[80%] grid-cols-9 flex-col p-2 md:grid md:w-[70%]">
          {stepCard.map((card, index) => (
            <StepCard
              key={index}
              stepNumber={card.stepNumber}
              title={card.title}
              description={card.description}
              imgClassName={card.imgClassName}
              currentStep={step}
              onClick={() => setStep(card.stepNumber)}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default HowTo;
