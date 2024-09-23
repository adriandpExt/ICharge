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
  return (
    <section className="h-fit w-full bg-[url('@/assets/bgCarouselCrop.png')] from-green-400 via-black to-green-400 bg-cover bg-no-repeat pb-32 pt-20 dark:bg-gradient-to-br">
      <div className="container mx-auto flex flex-col place-items-center">
        <h1 className="mb-14 text-center font-poppins text-5xl font-semibold text-white lg:text-[96px]">
          PRODUCTS
        </h1>
        <Carousel
          opts={{ align: "center" }}
          className="w-[95%] lg:h-[100%] lg:w-[90%]"
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
                className="flex h-[50rem] w-full items-center justify-center lg:basis-1/3"
              >
                <div className="flex h-[50svh] w-[80svw] flex-col place-content-center items-center space-y-5 rounded-[3rem] border-0 p-0 px-5 shadow-2xl shadow-black md:h-[35rem] lg:w-[25rem]">
                  <div
                    className="absolute -z-50 flex h-[50svh] w-[80svw] rounded-[3rem] border-x-0 border-t-2 border-green-400 bg-[#414141]/50 shadow-inner shadow-[#414141] backdrop-blur-lg md:h-[35rem] lg:w-[25rem]"
                    style={{
                      clipPath: "polygon(100% 0%, 0% 0%, 0% 65%, 100% 25%)",
                    }}
                  />
                  <div
                    className="absolute -z-50 h-[48svh] w-[80svw] rounded-[3rem] border-x-0 border-b-2 border-green-400 bg-green-400/20 shadow-inner shadow-green-400 backdrop-blur-lg md:h-[33.6rem] lg:w-[25rem]"
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
          <CarouselPrevious className="hidden aspect-square scale-150 rounded-e-none border-x-[0.5px] border-green-500 border-t-[1.5] bg-black/50 text-white shadow-inner shadow-green-700 hover:bg-black/40 hover:text-white lg:flex" />
          <CarouselNext className="hidden aspect-square scale-150 rounded-s-none border-x-[0.5px] border-green-500 border-b-[1.5] bg-black/50 text-white shadow-inner shadow-green-700 hover:bg-black/40 hover:text-white lg:flex" />
        </Carousel>

        <div className="mt-5 flex justify-center lg:hidden">
          {products.map((_, index) => (
            <div
              key={index}
              className={`mx-2 h-3 w-3 cursor-pointer rounded-full ${currentIndex === index ? "bg-opacity-100" : "bg-opacity-25"} bg-white`}
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
