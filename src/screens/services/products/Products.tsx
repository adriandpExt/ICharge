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
import { initValue } from "./utils";

import Products12Pro from "@/assets/Products/products/icharge12Pro.png";
import Products12 from "@/assets/Products/products/icharge12.png";
import Products8Plus from "@/assets/Products/products/icharge8Plus.png";
import Products8 from "@/assets/Products/products/icharge8.png";
import Products6 from "@/assets/Products/products/icharge6.png";
import Products24Max from "@/assets/Products/products/ichargeMax.png";
import Products48ProMax from "@/assets/Products/products/iCharge48ProMax.png";
import ProductsQCRC from "@/assets/Products/products/ichargeQCRC.png";
import ProductsQCSQ from "@/assets/Products/products/ichargeQCSQ.png";

const Features = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<Product>(initValue);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (e: { stopPropagation: () => void }, item: Product) => {
    e.stopPropagation();
    setContent(item);
    setOpen(true);
  };

  const handleOpenChange = () => {
    setOpen(false);
  };

  const handleCarouselChange = (index: number) => {
    setCurrentIndex(index);
  };

  const products: Product[] = [
    {
      productDetails: {
        name: "iCharge 6",
        description: t(LocalizationKey.services.icharge6desc),
        image: Products6,
        seatCapacity: t(LocalizationKey.services.icharge6desc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "75W", standBy: "3W" },
        dimensions: { h: "1150mm", l: "260mm", w: "235mm" },
        content: { code: "QI-6", slots: "6", powerbanks: "4" },
      },
    },
    {
      productDetails: {
        name: "iCharge 8",
        description: t(LocalizationKey.services.icharge8desc),
        image: Products8,
        seatCapacity: t(LocalizationKey.services.icharge8desc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "65W", standBy: "3W" },
        dimensions: { h: "174mm", l: "343mm", w: "188mm" },
        content: { code: "QI-8", slots: "8", powerbanks: "5" },
      },
    },
    {
      productDetails: {
        name: "iCharge 8 Plus",
        description: t(LocalizationKey.services.icharge8plusdesc),
        image: Products8Plus,
        seatCapacity: t(LocalizationKey.services.icharge8plusdesc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "65W", standBy: "3W" },
        dimensions: { h: "174mm", l: "343mm", w: "188mm" },
        content: { code: "QI-8Plus", slots: "8", powerbanks: "5" },
      },
    },
    {
      productDetails: {
        name: "iCharge 12",
        description: t(LocalizationKey.services.icharge12desc),
        image: Products12,
        seatCapacity: t(LocalizationKey.services.icharge12desc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "75W", standBy: "3W" },
        dimensions: { h: "260mm", l: "260mm", w: "235mm" },
        content: { code: "QI-12", slots: "12", powerbanks: "8" },
      },
    },
    {
      productDetails: {
        name: "iCharge 12 Pro",
        description: t(LocalizationKey.services.icharge12prodesc),
        image: Products12Pro,
        seatCapacity: t(LocalizationKey.services.icharge12prodesc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "75W", standBy: "3W" },
        dimensions: { h: "260mm", l: "260mm", w: "235mm" },
        content: { slots: "12", powerbanks: "8", code: "QI-12Pro" },
      },
    },
    {
      productDetails: {
        name: "iCharge 24 Max",
        description: t(LocalizationKey.services.icharge24maxdesc),
        image: Products24Max,
        seatCapacity: t(LocalizationKey.services.icharge24maxdesc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "160W", standBy: "24.2W" },
        dimensions: { h: "1650mm", l: "540mm", w: "450mm" },
        content: { code: "QI-Max", slots: "24", powerbanks: "16" },
      },
    },
    {
      productDetails: {
        name: "iCharge 48 Pro Max",
        description: t(LocalizationKey.services.icharge48promaxdesc),
        image: Products48ProMax,
        seatCapacity: t(LocalizationKey.services.icharge48promaxdesc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "--W", standBy: "--W" },
        dimensions: { h: "1650mm", l: "540mm", w: "450mm" },
        content: { code: "-", slots: "48", powerbanks: "32" },
      },
    },
    {
      productDetails: {
        name: "iCharge Standee SR",
        description: t(LocalizationKey.services.ichargestandeesrdesc),
        image: ProductsQCRC,
        seatCapacity: "",
      },
      productDescriptions: {
        wattage: { fullLoad: "-", standBy: "-" },
        dimensions: { h: "890mm", l: "450mm", w: "288mm" },
        content: { code: "-", slots: "-", powerbanks: "-" },
      },
    },
    {
      productDetails: {
        name: "iCharge Standee SS",
        description: t(LocalizationKey.services.ichargestandeessdesc),
        image: ProductsQCSQ,
        seatCapacity: "",
      },
      productDescriptions: {
        wattage: { fullLoad: "-", standBy: "-" },
        dimensions: { h: "956mm", l: "360mm", w: "340mm" },
        content: { code: "-", slots: "-", powerbanks: "-" },
      },
    },
  ];

  return (
    <section
      className="h-fit w-full overflow-hidden from-green-400 via-black to-green-400 bg-cover bg-no-repeat px-10 pt-16"
      id="serviceProducts"
    >
      <div className="container mx-auto flex flex-col place-items-center">
        <Label
          variant={"banner"}
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-center text-transparent lg:mb-14"
        >
          {t(LocalizationKey.services.products)}
        </Label>
        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full lg:h-[100%]"
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
                className="custom-lg:basisOneThird flex h-[32rem] w-[95%] justify-center"
              >
                <div className="flex h-[30rem] w-full flex-col place-content-center items-center space-y-5 rounded-[3rem] border-0 p-10 px-10 text-center md:w-[23rem]">
                  <div
                    className={cn(
                      "absolute -z-40 h-[30rem] w-[95%] rounded-[3rem] p-5 md:w-[23rem]",
                      "border-0 bg-[#C7E9C0]",
                    )}
                    style={{
                      clipPath: "polygon(100% 0%, 0% 0%, 0% 65%, 100% 25%)",
                      boxShadow: "inset 0 0 0 1px rgba(134, 239, 172, 1)",
                    }}
                  >
                    <div className="hidden h-fit w-full justify-start lg:flex">
                      <SvgIcons name="ic_svl_ig" size={50} />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "absolute -z-50 h-[28rem] w-[95%] rounded-[4rem] shadow-md md:w-[23rem] md:rounded-[3rem]",
                      "bg-[#E0EEDE]",
                    )}
                    style={{
                      clipPath: "polygon(100% 100%, 0% 100%, 0% 60%, 100% 20%)",
                      boxShadow: "inset 0 0 0 1px rgba(134, 239, 172, 1)",
                    }}
                  />
                  <img
                    src={data.productDetails.image}
                    className="h-[50%] w-auto object-contain"
                    alt="Product Image"
                  />
                  <Label
                    variant="title"
                    className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-center text-transparent lg:mb-14"
                  >
                    {data.productDetails.name.toLocaleUpperCase()}
                  </Label>
                  <Button
                    className="w-20 rounded-3xl bg-green-500 text-black hover:bg-green-400"
                    onClick={(e) => handleOpen(e, data)}
                  >
                    {t(LocalizationKey.services.more)}
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
