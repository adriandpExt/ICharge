import { Banner, PageContainer } from "@/components";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

const HowToUse = (): ReactElement => {
  return (
    <section>
      <Banner title="How to use" />

      <PageContainer className="space-y-10">
        <Card className={cn(
            "rounded-3xl border-none bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6] p-5 lg:p-8",
            "gap-10 space-y-5 lg:flex lg:justify-between lg:space-y-0",
          )}>
          <div className="flex flex-col space-y-3">
            <Label
              variant="heading2"
              className="bg-gradient-to-b from-[#044F00] to-[#078E00] bg-clip-text text-center font-medium text-transparent lg:text-start"
            >
              How to rent an iCharge Power Bank!
            </Label>

            <Label variant="subtitle">
              Stay powered up anytime, anywhere with iCharge! Watch this quick
              guide to see just how easy it is to rent, charge, and return. No
              more searching for outlets just effortless charging on the go!
            </Label>
          </div>

          <iframe
            src="https://www.youtube.com/embed/GGAc5QctHFE"
            allow="accelerometer; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="aspect-video h-full w-full rounded-2xl lg:w-1/2"
            allowFullScreen
          />
        </Card>

        <Card
          className={cn(
            "rounded-3xl border-none bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6] p-5 lg:p-8",
            "gap-10 space-y-5 lg:flex lg:flex-row-reverse lg:justify-between lg:space-y-0",
          )}
        >
            <div className="flex flex-col space-y-3">
              <Label
                variant="heading2"
                className="bg-gradient-to-b from-[#044F00] to-[#078E00] bg-clip-text text-center font-medium text-transparent lg:text-start"
              >
                How to return an iCharge Power Bank!
              </Label>

              <Label variant={"body"}>
                Done charging? Simply drop your iCharge power bank at any
                station, and your deposit will be refunded instantly! No
                waiting, no hassle. Just effortless charging on the go.
              </Label>
            </div>

            <iframe
              src="https://www.youtube.com/embed/GGAc5QctHFE"
              allow="accelerometer; autoplay; encrypted-media; ; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="aspect-video h-full w-full rounded-2xl lg:w-1/2"
              allowFullScreen
            />
        </Card>
      </PageContainer>
    </section>
  );
};

export default HowToUse;
