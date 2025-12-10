import { Banner, PageContainer } from "@/components";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import LocalizationKey from "@/i18n/key";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const scrollToHowToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Banner title={t(LocalizationKey.howTo.howToHeading)}>
        <div className="flex flex-col items-center space-y-16">
          <Label variant="subtitle" className="text-white">
            {t(LocalizationKey.howTo.howToBannerText)}
          </Label>

          <Button
            onClick={() => scrollToHowToSection("how-to")}
            variant={"custombutton"}
            className="group h-10 items-center bg-white text-green-600 hover:text-white"
          >
            {t(LocalizationKey.howTo.howToCallToAction)}
            <ChevronRight className="text-green-600 group-hover:text-white" />
          </Button>
        </div>
      </Banner>

      <section id="how-to">
        <PageContainer className="space-y-10">
          <HowToCard
            title={t(LocalizationKey.howTo.howToRent.howToRentHeader)}
            subtitle={t(LocalizationKey.howTo.howToRent.howToRentDesc)}
            link="https://www.youtube.com/embed/qD3iPkjB2bw?rel=0"
          />

          <HowToCard
            title={t(LocalizationKey.howTo.howToReturn.howToReturnHeader)}
            subtitle={t(LocalizationKey.howTo.howToReturn.howToReturnDesc)}
            link="https://www.youtube.com/embed/GGAc5QctHFE?rel=0"
            isFlipped
          />
        </PageContainer>
      </section>
    </>
  );
};

export default HowToUse;
