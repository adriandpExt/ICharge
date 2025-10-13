import { Banner, PageContainer } from "@/components";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

const HowToCard = ({
  title,
  subtitle,
  link,
  isFlipped = false,
}: {
  title: string;
  subtitle: string;
  link: string;
  isFlipped?: boolean;
}) => {
  return (
    <Card
      className={cn(
        "rounded-3xl border-none bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6] p-10 lg:flex lg:gap-10",
        isFlipped && "lg:flex-row-reverse",
      )}
    >
      <div className="flex flex-col justify-evenly gap-5 p-5">
        <Label
          variant="heading2"
          className="bg-gradient-to-b from-[#044F00] to-[#078E00] bg-clip-text text-center text-transparent"
        >
          {title}
        </Label>

        <Separator className="bg-gray-400" />

        <Label variant="subtitle">{subtitle}</Label>
      </div>

      <iframe
        src={link}
        allow="accelerometer; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="aspect-video h-full w-full rounded-2xl lg:w-1/2"
        allowFullScreen
      />
    </Card>
  );
};

const HowToUse = (): ReactElement => {
  return (
    <section>
      <Banner title="How to use" />

      <PageContainer className="space-y-10">
        <HowToCard
          title="How to rent an iCharge Power Bank!"
          subtitle="Stay powered up anytime, anywhere with iCharge! Watch this quick
              guide to see just how easy it is to rent, charge, and return. No
              more searching for outlets just effortless charging on the go!"
          link="https://www.youtube.com/embed/GGAc5QctHFE"
        />

        <HowToCard
          title="How to return an iCharge Power Bank!"
          subtitle="Done charging? Simply drop your iCharge power bank at any station,
              and your deposit will be refunded instantly! No waiting, no
              hassle. Just effortless charging on the go."
          link="https://www.youtube.com/embed/GGAc5QctHFE"
          isFlipped
        />
      </PageContainer>
    </section>
  );
};

export default HowToUse;
