import { Product } from "./types";
import { Card, CardContent } from "@/components/ui/card";
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
  const handleOpen = (e: { stopPropagation: () => void }, item: Product) => {
    e.stopPropagation();
    setContent(item);
    setOpen(true);
  };
  const handleOpenChange = () => {
    setOpen((open) => !open);
  };
  return (
    <section className="flex h-fit w-full flex-col place-items-center bg-[url('@/assets/bgCarousel.png')] bg-cover bg-no-repeat pb-32 pt-20">
      <h1 className="font-poppins mb-14 text-center text-5xl font-semibold text-white lg:text-[96px]">
        PRODUCTS
      </h1>
      <Carousel opts={{ align: "center" }} className="w-[95%] lg:w-[85%]">
        <CarouselContent>
          {products.map((data, index) => (
            <CarouselItem
              key={index}
              className="flex w-full justify-center lg:basis-1/3"
            >
              <Card className="rounded-[2.5rem] border-x-[1.5px] border-y-2 border-b-2 border-x-green-600 border-y-green-500 shadow-inner shadow-green-700">
                <CardContent className="flex h-[439px] w-[358px] flex-col place-content-center items-center space-y-5 rounded-[2.5rem] border-0 p-0">
                  <div
                    className="inherit absolute -z-50 flex h-[439px] w-[358px] rounded-[2.5rem] border-[#414141] bg-[#414141]/50 backdrop-blur-lg lg:basis-1/3"
                    style={{
                      clipPath: " polygon(100% 0%, 0% 0%, 0% 63%, 100% 23%)",
                    }}
                  ></div>
                  <div
                    className="inherit absolute -z-50 h-[439px] w-[358px] rounded-[3rem] bg-green-400/20 backdrop-blur-lg"
                    style={{
                      clipPath: "polygon(100% 100%, 0% 100%, 0% 60%, 100% 20%)",
                    }}
                  ></div>
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
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden aspect-square scale-150 rounded-e-none border-x-[0.5px] border-green-500 border-t-[1.5] bg-black/50 text-white shadow-inner shadow-green-700 hover:bg-black/40 hover:text-white lg:flex" />
        <CarouselNext className="hidden aspect-square scale-150 rounded-s-none border-x-[0.5px] border-green-500 border-b-[1.5] bg-black/50 text-white shadow-inner shadow-green-700 hover:bg-black/40 hover:text-white lg:flex" />
      </Carousel>
      <ProductModal
        item={content}
        open={open}
        handleOpenChange={handleOpenChange}
      />
    </section>
  );
};

export default Features;
