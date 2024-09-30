import { PageContainer } from "@/components";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useState } from "react";

const CaseStudy = () => {
  const steps = [
    {
      id: 1,
      completed: true,
      description: "14,144 rentals made in Laines pubs in 2022.",
    },
    {
      id: 2,
      completed: false,
      description:
        "Customers spend on average 82 minutes with the power bank in the pub.",
    },
    {
      id: 3,
      completed: false,
      description:
        "1,178 Joos rentals are made in Laines pubs per month on average.",
    },
  ];
  const [currentStep, setCurrentStep] = useState<number>(0);
  return (
    <PageContainer>
      <Card className="grid grid-cols-1 rounded-[36px] border-0 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6] lg:grid-cols-3">
        <div className="relative col-start-1 col-end-1 hidden h-full w-full rounded-bl-[36px] rounded-tl-[36px] bg-cover bg-no-repeat lg:grid lg:place-items-center lg:bg-[url('@/assets/modern-man-using-smartphone-city-2.png')]" />
        <CardContent className="col-start-2 col-end-4 flex flex-col space-y-5 p-20">
          <Label variant="title" className="text-7xl">
            LAINES CASE STUDY
          </Label>
          <Label className="text-2xl">
            Laines has pulled over 160 million pints at over 100 bars.
            Digitalization makes having a low maintenance phone charging
            solution essential to it's continued success.
          </Label>

          <div>
            <Label className="hidden text-2xl md:flex">
              Here's some highlight of Icharge x Laine's partnership:
            </Label>
          </div>
          <div className="hidden flex-col items-start lg:flex">
            {steps.map((step, index) => (
              <div key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-start space-x-5"
                    onClick={() => setCurrentStep(index)}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        currentStep >= index
                          ? "bg-gradient-to-t from-green-600 to-green-900"
                          : "bg-gray-300"
                      }`}
                    >
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    {currentStep >= index ? (
                      <Label data-aos="fade-left">{step.description}</Label>
                    ) : null}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="my-1 ml-[0.95rem] h-6 w-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default CaseStudy;
