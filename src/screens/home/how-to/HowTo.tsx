import { useState } from "react";
import { StepCardProps } from "./type";

import { PageContainer } from "@/components";
import HowToCard from "./components/HowToCard";
import { Label } from "@/components/ui/label";
import { handleLenght } from "./utils";
import { cn } from "@/lib/utils";

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

const StepCard = ({
  stepNumber,
  title,
  description,
  imgClassName,
  currentStep,
  onClick,
}: StepCardProps) => {
  const isActive = currentStep === stepNumber;
  const cardStyle = isActive ? "bg-green-900/90" : "bg-slate-700";
  const avatarStyle = isActive
    ? "bg-gradient-to-t from-green-500 to-green-800"
    : "dark:bg-white dark:text-black bg-black text-white";

  return (
    <div
      className={`flex ${stepNumber % 2 === 0 ? "gap-10" : "flex-row-reverse gap-10"} md:contents lg:gap-0`}
    >
      {stepNumber % 2 === 0 ? (
        <div className="col-start-1 col-end-5 hidden w-full flex-col items-start justify-center lg:flex">
          <Label className="font-lexendDeca text-5xl font-bold">{title}</Label>
          <p className="text-start font-lexendDeca text-xl">{description}</p>
        </div>
      ) : (
        <HowToCard
          className={cn(
            "col-start-1 col-end-5 rotate-[-135deg] lg:rotate-[45deg] lg:p-14",
            cardStyle,
          )}
          imgClassName={imgClassName}
          onClick={onClick}
          even={stepNumber % 2 === 0}
        />
      )}
      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
        <div
          className={cn(
            "flex h-full w-6 justify-center",
            handleLenght(stepNumber).item,
          )}
        >
          <div
            className={cn("w-2 bg-slate-400", handleLenght(stepNumber).height)}
          />
        </div>
        <div
          className={cn(
            "absolute -left-[120%] top-1/2 -mt-10 flex h-20 w-20 place-content-center items-center rounded-full font-sans text-2xl font-bold",
            avatarStyle,
          )}
        >
          {stepNumber}
        </div>
      </div>
      {stepNumber % 2 === 0 ? (
        <HowToCard
          className={cn(
            "col-start-6 col-end-12 rotate-[-135deg] lg:ml-20 lg:p-14",
            cardStyle,
          )}
          imgClassName={imgClassName}
          onClick={onClick}
          even={stepNumber % 2 === 0}
        />
      ) : (
        <div className="col-start-6 col-end-12 hidden w-full flex-col items-start justify-center lg:flex">
          <Label className="font-lexendDeca text-5xl font-bold">{title}</Label>
          <p className="text-start font-lexendDeca text-xl">{description}</p>
        </div>
      )}
    </div>
  );
};

const HowTo = () => {
  const [step, setStep] = useState(1);
  return (
    <PageContainer
      className="flex flex-col text-center dark:bg-black dark:text-white"
      id="howToPage"
    >
      <div className="space-y-14 lg:space-y-28">
        <Label className="font-poppins text-3xl lg:text-7xl font-bold">
          HOW TO USE ICHARGE?
        </Label>
        <div className="mx-auto flex w-[80%] grid-cols-9 flex-col p-2 md:grid">
          {stepCard.map((card) => (
            <StepCard
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
