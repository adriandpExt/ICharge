import { ReactElement, useState } from "react";

import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import LocalizationKey from "@/i18n/key";

import bgImg from "@/assets/modern-man-using-smartphone-city-2.png";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Banner, PageContainer } from "@/components";

import { InquiryForm, RenderItem } from "./components";
import { data, pitchDeck } from "./utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const PartnerWithUs = (): ReactElement => {
  const { t } = useTranslation();

  const [api, setApi] = useState<CarouselApi>();
  const [currIndex, setCurrIndex] = useState<number>(0);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const carouselApiInit = (api: CarouselApi) => {
    if (!api) return;

    setApi(api);
    setCurrIndex(api.selectedScrollSnap());

    api.on("select", () => setCurrIndex(api.selectedScrollSnap()));
  };

  return (
    <>
      <Banner title={t(LocalizationKey.partnerWithUs.partnerWithUsHeading)}>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col">
            <Label variant="subtitle" className="font-medium text-white">
              {t(LocalizationKey.partnerWithUs.heading1)}
            </Label>
            <Label variant="subtitle" className="font-medium text-white">
              {t(LocalizationKey.partnerWithUs.heading2)}
            </Label>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <Button
              onClick={() => scrollToSection("inquiryForm")}
              variant={"custombutton"}
              className="group h-10 items-center bg-white text-green-600 hover:text-white"
            >
              {t(LocalizationKey.partnerWithUs.bannerBtn)}
              <ChevronRight className="text-green-600 group-hover:text-white" />
            </Button>

            <Button
              onClick={() => scrollToSection("aboutIScreen")}
              variant="custombutton"
              className="h-10 items-center bg-white text-green-600 hover:text-white"
            >
              {t(LocalizationKey.partnerWithUs.aboutIScreen)}
              <ChevronRight className="text-green-600 group-hover:text-white" />
            </Button>
          </div>
        </div>
      </Banner>

      <PageContainer className="flex flex-col gap-20">
        {data.map((item, ids) => (
          <RenderItem
            key={ids}
            imgSrc={item.imgSrc}
            title={t(item.title)}
            list={item.list.map((label) => t(label))}
          />
        ))}
      </PageContainer>

      <PageContainer id="aboutIScreen" className="space-y-10">
        <div className="flex justify-center space-x-5">
          <p className="icharge-green-gradient-text font-staatliches text-5xl text-transparent md:text-6xl lg:text-8xl">
            {t(LocalizationKey.partnerWithUs.aboutIScreen).split("\n")[0]}
          </p>
          <p
            className={cn(
              "bg-gradient-to-r from-[#2afc94] via-[#12c4ef] to-[#ffc106]",
              "bg-clip-text text-center font-poppins text-5xl font-bold text-transparent",
              "md:text-6xl lg:text-8xl",
            )}
          >
            {t(LocalizationKey.partnerWithUs.aboutIScreen).split("\n")[1]}
          </p>
        </div>

        <Carousel
          opts={{ align: "center" }}
          className="w-full lg:h-full"
          setApi={carouselApiInit}
        >
          <CarouselContent>
            {pitchDeck.map((data, index) => (
              <CarouselItem key={index}>
                <img
                  src={data}
                  className="pointer-events-none h-full rounded-3xl border-2 border-green-500"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={cn(
              "custom-lg:flex hidden aspect-square scale-150 rounded-e-none text-green-500 hover:text-green-200",
              "border-[#D1F9C9] bg-[#E0EFDF]",
            )}
          />

          <CarouselNext
            className={cn(
              "custom-lg:flex hidden aspect-square scale-150 rounded-s-none text-green-500 hover:text-green-200",
              "border-[#D1F9C9] bg-[#E0EFDF]",
            )}
          />
        </Carousel>

        <div className="hidden place-self-center lg:block">
          {pitchDeck.map((_, ids) => (
            <button
              key={ids}
              className={cn(
                "mx-2 size-3 rounded-full bg-green-500",
                currIndex === ids ? "bg-opacity-100" : "bg-opacity-25",
              )}
              onClick={() => api?.scrollTo(ids)}
            />
          ))}
        </div>

        <p className="place-self-center font-poppins text-xs lg:hidden">
          {currIndex + 1} out of {pitchDeck.length}
        </p>
      </PageContainer>

      <section className="relative h-full w-full pb-16">
        <img
          src={bgImg}
          alt="Background"
          className="absolute inset-0 h-[90vh] w-full bg-cover brightness-50"
        />

        <div className="absolute inset-0 h-[90vh] bg-gradient-to-tr from-[#33E72A] to-transparent" />

        <div className="container relative z-10 mx-auto flex h-full flex-col gap-5 px-10 py-32">
          <Label variant={"banner"} className="!text-white">
            {t(LocalizationKey.partnerWithUs.wantToPartner)}
          </Label>
          <Label variant={"banner"} className="!text-white">
            {t(LocalizationKey.partnerWithUs.getInTouch)}
          </Label>
        </div>

        <InquiryForm />
      </section>
    </>
  );
};

export default PartnerWithUs;
