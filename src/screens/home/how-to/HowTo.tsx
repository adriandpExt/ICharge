import { PageContainer } from "@/components";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import { useState } from "react";
import HowToCard from "./components/HowToCard";

const HowTo = () => {
  const [step, setStep] = useState(1);
  const handleStep = (stepCount: number) => {
    const timeLineStyle = {
      avatar:
        step === stepCount
          ? "bg-gradient-to-t from-green-500 to-green-800"
          : "bg-white text-black",
      card: step === stepCount ? "bg-green-900/90" : "bg-slate-700",
    };
    return timeLineStyle;
  };
  return (
    <PageContainer
      className="flex flex-col dark:bg-black text-center dark:text-white"
      id="howToPage"
    >
      <div className="space-y-14 lg:space-y-32">
        <Label className="font-poppins text-4xl font-bold">
          How To use iCharge?
        </Label>
        <div className="mx-auto flex w-full lg:w-[80%] grid-cols-9 flex-col p-2 md:grid">
          <div className="flex flex-row-reverse gap-10 md:contents lg:gap-0 h-1/4">
            <HowToCard
              className={cn(
                "rotate-[-135deg] lg:rotate-45 lg:p-14",
                handleStep(1).card,
              )}
              imgClassName="bg-[url('@/assets/timeline1.png')]"
              even={false}
              onClick={() => setStep(1)}
            />
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex h-full w-6 items-end justify-center">
                <div className="h-[50%] w-2 bg-slate-400" />
              </div>
              <div
                className={cn(
                  "absolute -left-[120%] top-1/2 -mt-10 flex h-20 w-20 place-content-center items-center rounded-full font-sans text-2xl font-bold",
                  handleStep(1).avatar,
                )}
              >
                1
              </div>
            </div>
            <div className="col-start-6 col-end-12 hidden w-full flex-col items-start justify-center lg:flex">
              <Label className="font-lexendDeca text-5xl font-bold">Scan</Label>
              <p className="text-start font-lexendDeca text-xl">
                Scan QR code provided at any icharge stations to start your
                rental.
              </p>
            </div>
          </div>

          <div className="flex gap-10 md:contents lg:gap-0">
            <div className="col-start-1 col-end-5 hidden w-full flex-col items-end justify-center space-y-2 lg:flex">
              <Label className="font-lexendDeca text-5xl font-bold">
                Top up
              </Label>
              <p className="text-end font-lexendDeca text-xl">
                Top up your credit using Maya and Gcash.
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="h-full w-2 bg-slate-400" />
              </div>
              <div
                className={cn(
                  "absolute -left-[120%] top-1/2 -mt-10 flex h-20 w-20 place-content-center items-center rounded-full font-sans text-2xl font-bold",
                  handleStep(2).avatar,
                )}
              >
                2
              </div>
            </div>
            <HowToCard
              even
              className={cn(
                "rotate-[-135deg] lg:ml-20 lg:p-14",
                handleStep(2).card,
              )}
              onClick={() => setStep(2)}
              imgClassName="bg-[url('@/assets/timeline2.png')]"
            />
          </div>

          <div className="flex flex-row-reverse gap-10 md:contents lg:gap-0">
            <HowToCard
              className={cn(
                "relative col-start-1 col-end-5 rotate-[-135deg] lg:rotate-45 lg:p-14",
                handleStep(3).card,
              )}
              even={false}
              onClick={() => setStep(3)}
              imgClassName="bg-[url('@/assets/timeline3.png')]"
            />
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="h-full w-2 bg-slate-400" />
              </div>
              <div
                className={cn(
                  "absolute -left-[120%] top-1/2 -mt-10 flex h-20 w-20 place-content-center items-center rounded-full font-sans text-2xl font-bold",
                  handleStep(3).avatar,
                )}
              >
                3
              </div>
            </div>
            <div className="col-start-6 col-end-12 hidden w-full flex-col items-start justify-center space-y-2 lg:flex">
              <Label className="font-lexendDeca text-5xl font-bold">
                Charge
              </Label>
              <p className="text-start font-lexendDeca text-xl">
                Get the powerbank from the machine and charge your device
                whenever you want.
              </p>
            </div>
          </div>

          <div className="flex gap-10 md:contents lg:gap-0">
            <div className="col-start-1 col-end-5 hidden w-full flex-col items-end justify-center space-y-2 lg:flex">
              <Label className="font-lexendDeca text-5xl font-bold">
                Return
              </Label>
              <p className="text-end font-lexendDeca text-xl">
                Return by inserting the powerbank in position to an empty slot
                at any machine near you.
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex h-full w-6 justify-center">
                <div className="h-[50%] w-2 bg-slate-400" />
              </div>
              <div
                className={cn(
                  "absolute -left-[120%] top-1/2 -mt-10 flex h-20 w-20 place-content-center items-center rounded-full font-sans text-2xl font-bold",
                  handleStep(4).avatar,
                )}
              >
                4
              </div>
            </div>
            <HowToCard
              even
              className={cn(
                "rotate-[-135deg] lg:ml-20 lg:p-14",
                handleStep(4).card,
              )}
              onClick={() => setStep(4)}
              imgClassName="bg-[url('@/assets/timeline4.png')]"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default HowTo;
