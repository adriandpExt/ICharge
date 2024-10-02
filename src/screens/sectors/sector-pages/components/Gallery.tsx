import { PageContainer } from "@/components";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

const carouselContents = [
  {
    image: "bg-[url('@/assets/modern-man-using-smartphone-city-2.png')]",
  },
  {
    image: "bg-[url('@/assets/modern-man-using-smartphone-city-2.png')]",
  },
  {
    image: "bg-[url('@/assets/modern-man-using-smartphone-city-2.png')]",
  },
  {
    image: "bg-[url('@/assets/modern-man-using-smartphone-city-2.png')]",
  },
  {
    image: "bg-[url('@/assets/modern-man-using-smartphone-city-2.png')]",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleCarouselChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <PageContainer className="flex flex-col space-y-10 text-center">
      <Label variant="title" className="text-7xl">
        GALLERY
      </Label>
      <Carousel
        opts={{ align: "center" }}
        orientation="horizontal"
        setApi={(api) => {
          if (api !== undefined) {
            api.on("select", () => {
              handleCarouselChange(api.selectedScrollSnap());
            });
          }
        }}
      >
        <CarouselContent>
          {carouselContents.map(({ image }, index) => (
            <CarouselItem
              className="flex h-[25rem] w-full items-center justify-center lg:basis-1/3"
              key={index}
            >
              <CardContent
                className={cn(
                  "h-[20rem] w-[25rem] rounded-2xl",
                  image,
                  currentIndex === index - 1 && "lg:scale-125",
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="custom-lg:hidden flex justify-center">
          {carouselContents.map((_, index) => (
            <div
              key={index}
              className={`mx-2 h-3 w-3 cursor-pointer rounded-full ${currentIndex === index ? "bg-opacity-100" : "bg-opacity-25"} bg-green-500`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </Carousel>
      <div className="flex flex-col space-y-5">
        <Label variant="title" className="text-5xl lg:text-7xl">
          SUPERCHARGE YOUR VENUE WITH ICHARGE.
        </Label>
      </div>
    </PageContainer>
  );
};

export default Gallery;
