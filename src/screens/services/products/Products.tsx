import { Product } from "./types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductModal from "./components/ProductModal"; // Make sure this component exists and is functioning
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SvgIcons from "@/components/svg-icons/SvgIcons";
import { cn } from "@/lib/utils";
import LocalizationKey from "@/i18n/key";
import { initValue, products } from "./utils";

const Features = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<Product>(initValue);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle opening the modal and passing product data
  const handleOpen = (e: { stopPropagation: () => void }, item: Product) => {
    e.stopPropagation();
    setContent(item); // Set the current product content
    setOpen(true); // Open the modal
  };

  const handleOpenChange = () => {
    setOpen(false); // Close the modal
  };

  const handleCarouselChange = (index: number) => { 
    setCurrentIndex(index); // Update the current carousel index
  };

  return (
    <section className="h-fit w-full overflow-hidden from-green-400 via-black to-green-400 bg-cover bg-no-repeat px-10 pt-16">
      <div className="container mx-auto flex flex-col place-items-center">
        <Label
          variant={"banner"}
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-center text-transparent lg:mb-14"
        >
          {t(LocalizationKey.home.products)}
        </Label>
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
                className="custom-lg:basisOneThird flex h-[30rem] w-full items-center justify-center md:h-[40rem]"
              >
                <div className="flex h-[50svh] w-[80svw] flex-col place-content-center items-center space-y-5 rounded-[3rem] border-0 p-10 text-center shadow-md shadow-black/40 md:h-[30rem] lg:w-[25rem] lg:px-10">
                  <div
                    className={cn(
                      "absolute -z-40 h-[50svh] w-[80svw] rounded-[3rem] md:h-[30rem] lg:w-[25rem]",
                      "border-0 bg-[#C7E9C0]",
                    )}
                    style={{
                      clipPath: "polygon(100% 0%, 0% 0%, 0% 65%, 100% 25%)",
                    }}
                  />
                  <div
                    className={cn(
                      "absolute -z-50 h-[48svh] w-[80svw] rounded-[3rem] shadow-inner md:h-[28.8rem] lg:w-[25rem]",
                      "border-[#B7FAB1] border-x-[1] bg-[#E0EEDE]",
                    )}
                    style={{
                      clipPath: "polygon(100% 100%, 0% 100%, 0% 60%, 100% 20%)",
                    }}
                  />
                  <div className="hidden h-fit w-full justify-start lg:flex">
                    <SvgIcons name="ic_svl_ig" size={50} />
                  </div>
                  <img
                    src={data.productDetails.image}
                    className="h-[50%] w-auto object-contain"
                    alt="Product Image"
                  />
                  <h1 className="font-sans text-4xl font-semibold tracking-tighter text-white">
                    {data.productDetails.name}
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

        <div className="custom-lg:hidden mt-5 flex justify-center">
          {products.map((_, index) => (
            <div
              key={index}
              className={`mx-2 h-3 w-3 cursor-pointer rounded-full ${
                currentIndex === index ? "bg-opacity-100" : "bg-opacity-25"
              } bg-green-500`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Product Modal Component */}
        <ProductModal
          item={content}
          open={open}
          handleOpenChange={handleOpenChange} // Ensure this properly closes the modal
        />
      </div>
    </section>
  );
};

export default Features;