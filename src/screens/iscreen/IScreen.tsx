import { Banner, PageContainer } from "@/components";
import { cn } from "@/lib/utils";

import LocalizationKey from "@/i18n/key";
import {
  benefitsForAdvertisers,
  iScreenDetails,
  productOverview,
  whyAdvertise,
} from "./utils";

import iScreenSample from "@/assets/iscreen/iScreen-about.jpeg";
import Pdf from "@/assets/iscreen/iScreen-Brochure.pdf";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { IIScreenProduct } from "./type";
import { ProductItem } from "./components";
import { ProductModal } from "./components/ProductModal";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const IScreen = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalContent, setModalContent] = useState<IIScreenProduct | null>(
    null,
  );
  const { t } = useTranslation();

  const carouselApiInit = (api: CarouselApi) => {
    if (!api) return;

    setApi(api);
    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => setCurrentIndex(api.selectedScrollSnap()));
  };

  const handleOpen = (
    e: { stopPropagation: () => void },
    item: IIScreenProduct,
  ) => {
    e.stopPropagation();
    setModalContent(item);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Pdf;
    link.download = "iScreen-Brochure.pdf";
    link.click();
  };

  return (
    <>
      <Banner title="" backgroundColor="#fadd88">
        <div className="space-y-7">
          <div>
            <p
              className={cn(
                "bg-gradient-to-r from-[#2afc94] from-30% via-[#12c4ef] via-50% to-[#ffc106] to-60%",
                "bg-clip-text text-center font-poppins text-5xl font-bold text-transparent",
                "md:text-6xl lg:text-8xl",
              )}
            >
              {t(LocalizationKey.partnerWithUs.aboutIScreen).split("\n")[1]}
            </p>

            <p className="font-poppins text-2xl font-bold uppercase tracking-widest text-white">
              {t(LocalizationKey.iScreen.mediaNetwork)}
            </p>

            <p className="font-poppins text-sm text-white lg:text-xl">
              {t(LocalizationKey.iScreen.poweredByICharge)}
            </p>
          </div>

          <p className="hidden font-poppins text-4xl text-white lg:block">
            {t(LocalizationKey.iScreen.bannerText)}
          </p>

          <Button
            onClick={handleDownload}
            variant={"custombutton"}
            className="bg-white text-[#ffc106] hover:bg-[#ffc106] hover:text-white"
          >
            {t(LocalizationKey.iScreen.downloadButton)}
          </Button>
        </div>
      </Banner>

      <p className="bg-gradient-to-b from-[#ffc106] to-[#fadd88] bg-clip-text text-center font-staatliches text-4xl text-transparent md:text-5xl lg:text-7xl">
        {t(LocalizationKey.iScreen.about.aboutTitle)}
      </p>

      <img src={iScreenSample} className="mt-10 w-full xl:hidden" />

      <PageContainer className="space-y-7">
        <Card className="-mt-10 rounded-2xl border-[#ffc106] from-[#fde396] via-[#fcefc7] to-[#fff7df] shadow-none lg:bg-gradient-to-b lg:shadow xl:flex">
          <img
            src={iScreenSample}
            className="hidden w-1/2 rounded-l-2xl xl:block"
          />

          <CardContent className="flex flex-col justify-evenly space-y-5 p-5 xl:w-3/5">
            <p className="font-poppins text-sm lg:text-xl text-justify">
              <span className="font-poppins font-bold">
                {t(iScreenDetails.title)}
              </span>{" "}
              {t(iScreenDetails.text).split("\n")[0]}
            </p>

            <p className="font-poppins text-sm lg:text-xl text-justify">{t(iScreenDetails.text).split("\n")[2]}</p>

            <div className="space-y-2">
              <p className="font-poppins text-sm font-bold lg:text-xl">
                {t(
                  LocalizationKey.iScreen.about.aboutKeyFeatures
                    .keyFeaturesTitle,
                )}
              </p>

              <ul className="list-inside list-disc text-sm lg:text-xl">
                {iScreenDetails.keyFeatures.map((item, ids) => (
                  <li key={ids} className="font-poppins">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </PageContainer>

      <PageContainer className="space-y-7">
        <p className="bg-gradient-to-b from-[#ffc106] to-[#fadd88] bg-clip-text text-center font-staatliches text-4xl text-transparent md:text-5xl lg:text-7xl">
          {t(LocalizationKey.iScreen.productOverview.productOverviewTitle)}
        </p>

        <p className="font-poppins text-sm lg:text-xl">
          {t(productOverview.flavorText)}
        </p>

        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full lg:h-full"
          setApi={carouselApiInit}
        >
          <CarouselContent>
            {productOverview.products.map((data, index) => (
              <CarouselItem
                key={index}
                className="custom-lg:basisOneThird flex h-[32rem] w-[95%] justify-center"
              >
                <ProductItem data={data} onClick={handleOpen} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={cn(
              "custom-lg:flex hidden aspect-square scale-150 rounded-e-none text-[#ffc106] hover:text-[#fadd88]",
              "border-[#ffc106] bg-[#faf6eb]",
            )}
          />

          <CarouselNext
            className={cn(
              "custom-lg:flex hidden aspect-square scale-150 rounded-s-none text-[#ffc106] hover:text-[#fadd88]",
              "border-[#ffc106] bg-[#faf6eb]",
            )}
          />
        </Carousel>

        <div className="custom-lg:hidden mt-5 flex justify-center">
          {productOverview.products.map((_, index) => (
            <div
              key={index}
              className={cn(
                "mx-2 size-3 rounded-full bg-[#ffc106]",
                currentIndex === index ? "bg-opacity-100" : "bg-opacity-25",
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </PageContainer>

      <PageContainer className="space-y-7">
        <p className="bg-gradient-to-b from-[#ffc106] to-[#fadd88] bg-clip-text text-center font-staatliches text-4xl text-transparent md:text-5xl lg:text-7xl">
          {t(LocalizationKey.iScreen.whyAdvertise.whyAdvertiseTitle)}
        </p>

        <p className="font-poppins text-sm lg:text-xl">
          {t(LocalizationKey.iScreen.whyAdvertise.whyAdvertiseFlavorText)}
        </p>

        <div className="space-y-5">
          {whyAdvertise.map((item, ids) => (
            <div
              key={ids}
              className={cn(
                "space-y-2 rounded-2xl border border-[#ffc106] bg-[#faf6eb] p-5",
              )}
            >
              <p className="font-poppins text-lg font-bold text-[#ffc106] lg:text-2xl">
                {t(item.title)}
              </p>

              <p className="font-poppins text-sm lg:text-xl">{t(item.desc)}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#ffc106] bg-[#faf6eb] p-5 text-center">
          <p className="font-poppins text-lg font-bold text-[#ffc106] lg:text-2xl">
            {t(
              LocalizationKey.iScreen.benefitsForAdvertisers
                .benefitsForAdvertisersTitle,
            )}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefitsForAdvertisers.map((item, ids) => {
              const Icon = item.icon;

              return (
                <div key={ids} className="place-items-center space-y-3">
                  <Icon
                    size={80}
                    className="rounded-full bg-[#ffc106] p-2 text-white"
                  />

                  <p className="font-poppins text-sm lg:text-xl">
                    {t(item.text)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>

      <ProductModal
        item={modalContent as IIScreenProduct}
        open={!!modalContent}
        handleClose={() => setModalContent(null)}
      />
    </>
  );
};

export default IScreen;
