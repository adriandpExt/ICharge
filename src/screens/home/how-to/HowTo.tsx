import { StepCardProps } from "./type";

import { useEffect, useMemo, useRef, useState } from "react";

import { PageContainer } from "@/components";
import { Label } from "@/components/ui/label";

import StepCard from "./components/StepCard";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";

const HowTo = () => {
  const [step, setStep] = useState(1);
  const { t } = useTranslation();
  const stepCard = useMemo<Omit<StepCardProps, "currentStep" | "onClick">[]>(
    () => [
      {
        stepNumber: 1,
        title: t(LocalizationKey.home.scan),
        description: t(LocalizationKey.home.scanDescription),
        imgClassName: "bg-[url('@/assets/timeline/timeline1.png')]",
      },
      {
        stepNumber: 2,
        title: t(LocalizationKey.home.topUp),
        description: t(LocalizationKey.home.topUpDescription),
        imgClassName: "bg-[url('@/assets/timeline/timeline2.png')]",
      },
      {
        stepNumber: 3,
        title: t(LocalizationKey.home.charge),
        description: t(LocalizationKey.home.chargeDescription),
        imgClassName: "bg-[url('@/assets/timeline/timeline3.png')]",
      },
      {
        stepNumber: 4,
        title: t(LocalizationKey.home.return),
        description: t(LocalizationKey.home.returnDescription),
        imgClassName: "bg-[url('@/assets/timeline/timeline4.png')]",
      },
    ],
    [t],
  );
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepCard.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setStep(index + 1);
          }
        },
        { threshold: 0.5 },
      );

      if (stepRefs.current[index]) {
        observer.observe(stepRefs.current[index]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [stepCard]);

  return (
    <PageContainer
      className="container mx-auto flex flex-col text-center"
    >
      <div className="space-y-14 lg:space-y-28">
        <Label variant={"heading1"}>
          {t(LocalizationKey.home.howtoUseIcharge)}
        </Label>
        <div>
          {stepCard.map((card, index) => (
            <div
              className="mx-auto flex w-[80%] grid-cols-9 flex-col md:grid md:w-[70%]"
              ref={(el) => (stepRefs.current[index] = el)}
            >
              <StepCard
                key={index}
                stepNumber={card.stepNumber}
                title={card.title}
                description={card.description}
                imgClassName={card.imgClassName}
                currentStep={step}
                onClick={() => setStep(card.stepNumber)}
              />
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default HowTo;
