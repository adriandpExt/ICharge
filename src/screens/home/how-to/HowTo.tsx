import { useState } from "react";

import { PageContainer } from "@/components";
import { Label } from "@/components/ui/label";

import StepCard from "./components/StepCard";

import { stepCard } from "./utils";

const HowTo = () => {
  const [step, setStep] = useState(1);
  return (
    <PageContainer
      className="container mx-auto flex flex-col text-center dark:text-white"
      id="howToPage"
    >
      <div className="space-y-14 lg:space-y-28">
        <Label variant={"heading1"} className="dark:text-white">
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
