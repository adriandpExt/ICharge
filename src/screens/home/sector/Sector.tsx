import { ReactElement, useState } from "react";
import { PageContainer } from "@/components";
import IndustryCard from "./component/IndustryCard";
import { bottomSector, sector, topSector } from "./utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";

const Sector = (): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselChange = (index: number): void => {
    setCurrentIndex(index); // Update the current carousel index
  };
  return (
    <>
      <PageContainer className="hidden flex-col space-y-10 lg:flex">
        <div className="flex flex-col space-y-5 text-center">
          <Label variant="heading1">INDUSTRIES WE SERVE</Label>
          <Label variant="subtitle">Powering Anyone, Anytime, Anywhere</Label>
        </div>
        {/* desktop view */}
        <div className="grid grid-cols-2 gap-10">
          {topSector.map(({ title, bgImage }, index) => (
            <IndustryCard
              card={{ title, bgImage }}
              key={index}
              isDesktop={true}
            />
          ))}
        </div>
        <div className="hidden grid-cols-3 gap-10 lg:grid">
          {bottomSector.map(({ title, bgImage }, index) => (
            <IndustryCard
              card={{ title, bgImage }}
              key={index}
              isDesktop={true}
            />
          ))}
        </div>
        {/* desktop view */}
      </PageContainer>
      {/* mobile view */}
      <div className="space-y-5 lg:hidden">
        <div className="flex flex-col space-y-5 text-center">
          <Label variant="heading1">INDUSTRIES WE SERVE</Label>
          <Label variant="subtitle">Powering Anyone, Anytime, Anywhere</Label>
        </div>
        <Carousel
          className="overflow-hidden"
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={(api) => {
            if (api !== undefined) {
              api.on("select", () =>
                handleCarouselChange(api.selectedScrollSnap()),
              );
            }
          }}
        >
          <CarouselContent className="flex h-[100%]">
            {sector.map(({ title, bgImage }, index) => (
              <CarouselItem className="relative mr-4 min-w-0 flex-[0_0_70%]">
                <IndustryCard
                  card={{ title, bgImage }}
                  className={
                    index !== currentIndex ? "opacity-25" : "opacity-100"
                  }
                  key={index}
                  isDesktop={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="custom-lg:hidden mt-5 flex justify-center">
            {sector.map((_, index) => (
              <div
                key={index}
                className={`mx-2 h-3 w-3 cursor-pointer rounded-full ${
                  currentIndex === index ? "bg-opacity-100" : "bg-opacity-25"
                } bg-green-500`}
              />
            ))}
          </div>
        </Carousel>
      </div>
      {/* mobile view */}
    </>
  );
};

export default Sector;
