import { useState } from "react";

import { Banner, PageContainer } from "@/components";
import { Label } from "@/components/ui/label";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import iScreenLogo from "@/assets/businessCard/iScreen.png";

import iScreenImageOne from "@/assets/iscreen/desktop/iScreen-pdf-1.png";
import iScreenImageTwo from "@/assets/iscreen/desktop/iScreen-pdf-2.png";

import WhyAdvertise from "@/assets/iscreen/mobile/why-advertise.png";
import PackageSolution from "@/assets/iscreen/mobile/package-solution.png";
import Cover from "@/assets/iscreen/mobile/cover.png";
import PartnerWithIScreen from "@/assets/iscreen/mobile/partner-with-iscreen.png";
import PackagePricing from "@/assets/iscreen/mobile/package-pricing.png";
import PackageDetails from "@/assets/iscreen/mobile/details.png";

const baseClass = "rounded-3xl border-2 border-amber-500 h-full pointer-events-none";

const mobileBrochureView = [
  Cover,
  WhyAdvertise,
  PackageSolution,
  PartnerWithIScreen,
  PackagePricing,
  PackageDetails,
];

const IScreen = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currIndex, setCurrIndex] = useState<number>(0);

  const carouselApiInit = (api: CarouselApi) => {
    if (!api) return;

    setApi(api);
    setCurrIndex(api.selectedScrollSnap());

    api.on("select", () => setCurrIndex(api.selectedScrollSnap()));
  };

  return (
    <>
      <Banner title="">
        <div className="flex w-full flex-col items-center gap-10">
          <img
            src={iScreenLogo}
            className="size-60 rounded-full border-4 border-[#078E00] lg:size-80"
          />

          <Label variant="subtitle" className="text-white">
            Looking forward to advertise with us? Below are the details to see
            about iScreen - a digital LED advertising platform powered by
            iCharge.
          </Label>
        </div>
      </Banner>

      <section id="iscreen">
        <PageContainer>
          <div className="hidden space-y-10 lg:block">
            <img src={iScreenImageOne} className={baseClass} />

            <img src={iScreenImageTwo} className={baseClass} />
          </div>

          <div className="flex flex-col items-center space-y-10 lg:hidden">
            <Carousel opts={{ align: "center" }} setApi={carouselApiInit}>
              <CarouselContent>
                {mobileBrochureView.map((img, ids) => (
                  <CarouselItem key={ids}>
                    <img key={ids} src={img} className={baseClass} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div>
              {mobileBrochureView.map((_, ids) => (
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
          </div>
        </PageContainer>
      </section>
    </>
  );
};

export default IScreen;
