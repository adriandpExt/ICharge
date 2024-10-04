import { StepCardProps } from "./type";

import { useState } from "react";

import { PageContainer } from "@/components";
import { Label } from "@/components/ui/label";

import StepCard from "./components/StepCard";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";

const HowTo = () => {
  const [step, setStep] = useState(1);
  const { t } = useTranslation();
  const stepCard: Omit<StepCardProps, "currentStep" | "onClick">[] = [
    {
      stepNumber: 1,
      title: t(LocalizationKey.home.scan),
      description: t(LocalizationKey.home.scanDescription),
      imgClassName: "bg-[url('@/assets/timeline1.png')]",
    },
    {
      stepNumber: 2,
      title: t(LocalizationKey.home.topUp),
      description: t(LocalizationKey.home.topUpDescription),
      imgClassName: "bg-[url('@/assets/timeline2.png')]",
    },
    {
      stepNumber: 3,
      title: t(LocalizationKey.home.charge),
      description: t(LocalizationKey.home.chargeDescription),
      imgClassName: "bg-[url('@/assets/timeline3.png')]",
    },
    {
      stepNumber: 4,
      title: t(LocalizationKey.home.return),
      description: t(LocalizationKey.home.returnDescription),
      imgClassName: "bg-[url('@/assets/timeline4.png')]",
    },
  ];

  return (
    <PageContainer
      className="container mx-auto flex flex-col text-center dark:text-white"
      id="howToPage"
    >
      <div className="space-y-14 lg:space-y-28">
        <Label variant={"heading1"} className="dark:text-white">
          {t(LocalizationKey.home.howtoUseIcharge)}
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
