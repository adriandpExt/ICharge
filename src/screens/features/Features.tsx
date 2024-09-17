// import video from "@/assets/iCharge.mov";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductModal from "./ProductModal";
import { useState } from "react";

const Features = () => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = () => {
    setOpen((open) => !open);
  };
  return (
    <section className="h-screen w-full bg-[url('@/assets/404.png')] bg-contain bg-no-repeat">
      <div className="flex h-full w-full place-content-center items-center bg-green-500 bg-opacity-50">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-[90%]"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 backdrop-blur-sm">
                  <Card
                    className="rounded-3xl border-0 bg-black bg-opacity-25 text-white"
                    onClick={() => setOpen(true)}
                  >
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                  <ProductModal
                    item={index}
                    open={open}
                    handleOpenChange={handleOpenChange}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Features;
