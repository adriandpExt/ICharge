import { Product } from "./types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductModal from "./components/ProductModal";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { initValue, products } from "./utils";
import { cn } from "@/lib/utils";

const Features = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<Product>(initValue);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOpen = (e: { stopPropagation: () => void }, item: Product) => {
    e.stopPropagation();
    setContent(item);
    setOpen(true);
  };
  const handleOpenChange = () => {
    setOpen((open) => !open);
  };
  const handleCarouselChange = (index: number) => {
    setCurrentIndex(index);
  };
  const carouselItemDarkTop =
    "dark:border-t-2 dark:border-green-400 dark:bg-[#2E3935] shadow-inner dark:shadow-[#414141]";
  const carouselItemDarkBottom =
    "dark:border-b-2 dark:border-green-400 dark:bg-[#194B21]/50 dark:shadow-green-400";
  return (
    <section className="h-fit w-full overflow-hidden from-green-400 via-black to-green-400 bg-cover bg-no-repeat pb-32 pt-20 dark:bg-gradient-to-br">
      <div className="container mx-auto flex flex-col place-items-center">
        <h1 className="mb-14 text-center font-poppins text-5xl font-semibold text-black lg:text-[96px]">
          PRODUCTS
        </h1>
        <Carousel
          opts={{ align: "center" }}
          className="w-[95%] lg:h-[100%] lg:w-[95%]"
          setApi={(api) => {
            if (api !== undefined) {
              api.on("select", () =>
                handleCarouselChange(api.selectedScrollSnap()),
              );
            }
          }}
        >
          <CarouselContent>
            {products.map((data, index) => (
              <CarouselItem
                key={index}
                className="flex h-[40rem] w-full items-center justify-center lg:basis-1/3"
              >
                <div className="flex h-[40svh] w-[80svw] flex-col place-content-center items-center space-y-5 rounded-[3rem] border-0 shadow-md shadow-black/40 sm:p-10 md:h-[30rem] lg:w-[25rem] lg:px-10">
                  <div
                    className={cn(
                      "absolute -z-40 h-[40svh] w-[80svw] rounded-[3rem] md:h-[30rem] lg:w-[25rem]",
                      carouselItemDarkTop,
                      "border-0 bg-[#C7E9C0]",
                    )}
                    style={{
                      clipPath: "polygon(100% 0%, 0% 0%, 0% 65%, 100% 25%)",
                    }}
                  />
                  <div
                    className={cn(
                      "absolute -z-50 h-[38svh] w-[80svw] rounded-[3rem] shadow-inner md:h-[28.8rem] lg:w-[25rem]",
                      carouselItemDarkBottom,
                      "border-[#B7FAB1] border-x-[1] bg-[#E0EEDE]",
                    )}
                    style={{
                      clipPath: "polygon(100% 100%, 0% 100%, 0% 60%, 100% 20%)",
                    }}
                  />
                  <img
                    src={data.image}
                    className="h-[50%] w-auto object-contain"
                    alt="Product Image"
                  />
                  <h1 className="font-sans text-4xl font-semibold tracking-tighter text-white">
                    {data.name}
                  </h1>
                  <Button
                    className="w-20 rounded-3xl bg-green-500 text-black hover:bg-green-400"
                    onClick={(e) => handleOpen(e, data)}
                  >
                    More
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={cn(
              "hidden aspect-square scale-150 rounded-e-none text-green-500 hover:text-green-200 lg:flex",
              "dark:border-x-[0.5px] dark:border-t-[1.5] dark:bg-black/50 dark:text-white dark:shadow-inner dark:shadow-green-700 dark:hover:bg-black/40",
              "border-[#D1F9C9] bg-[#E0EFDF]",
            )}
          />
          <CarouselNext
            className={cn(
              "hidden aspect-square scale-150 rounded-s-none text-green-500 hover:text-green-200 lg:flex",
              "dark:border-x-[0.5px] dark:border-t-[1.5] dark:bg-black/50 dark:text-white dark:shadow-inner dark:shadow-green-700 dark:hover:bg-black/40",
              "border-[#D1F9C9] bg-[#E0EFDF]",
            )}
          />
        </Carousel>

        <div className="mt-5 flex justify-center lg:hidden">
          {products.map((_, index) => (
            <div
              key={index}
              className={`mx-2 h-3 w-3 cursor-pointer rounded-full ${currentIndex === index ? "bg-opacity-100" : "bg-opacity-25"} bg-green-500`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <ProductModal
          item={content}
          open={open}
          handleOpenChange={handleOpenChange}
        />
      </div>
    </section>
  );
};

export default Features;