import { Banner, PageContainer } from "@/components";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
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
        "rounded-3xl border-none bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6] p-2 lg:flex lg:gap-10 lg:p-10",
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
  const scrollToHowToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Banner title="How to use">
        <div className="flex flex-col items-center space-y-16">
          <Label variant="subtitle" className="text-white">
            Get to know how to avail our services. This is an
            introduction on how will you rent our power banks when you're near
            our charging stations, and how to return them.
          </Label>

          <Button
            onClick={() => scrollToHowToSection("how-to")}
            variant={"custombutton"}
            className="group h-10 items-center bg-white text-green-600 hover:text-white"
          >
            Click here
            <ChevronDown className="text-green-600 group-hover:text-white" />
          </Button>
        </div>
      </Banner>

      <section id="how-to">
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
    </>
  );
};

export default HowToUse;
