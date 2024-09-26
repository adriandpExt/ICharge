import Dunkin from "@/assets/Products/dunkin.png";
import Ikea from "@/assets/Products/ikea.png";
import MaryGrace from "@/assets/Products/marygrace.png";
import AyalaMalls from "@/assets/Products/ayalamalls.png";
import Robinsons from "@/assets/Products/robinsons.png";
import Angkan from "@/assets/Products/angkan.png";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";

// Logos array
interface Logo {
  name: string;
  src: string;
}

const logos: Logo[] = [
  { name: "Robinsons Malls", src: Dunkin },
  { name: "Dunkin", src: Ikea },
  { name: "Ayala Malls", src: MaryGrace },
  { name: "Mary Grace", src: AyalaMalls },
  { name: "Ikea", src: Robinsons },
  { name: "Google", src: Angkan },
];

export default function Component() {
  const { t } = useTranslation();

  return (
    <div className="container relative mx-auto overflow-hidden border-green-400 bg-green-100 lg:rounded-3xl">
      <div className="flex flex-col bg-green-300 bg-gradient-to-b p-4">
        <Label variant={"title"} className="text-center text-2xl">
          {t(LocalizationKey.home.companyCarousel)}
        </Label>
      </div>
      <div className="flex h-36 place-items-center p-4">
        <Carousel
          className="flex overflow-hidden whitespace-nowrap"
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            inViewThreshold: 0,
            dragFree: true,
            duration: 10000,
          }}
          plugins={[AutoPlay({ playOnInit: true, delay: 0 })]}
        >
          <CarouselContent>
            {[...logos, ...logos].map((logo, index) => (
              <CarouselItem
                key={index}
                className="mx-4 flex h-16 min-w-[150px] basis-1/12 items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="py-2 text-center text-sm text-muted-foreground"></div>
        </Carousel>
      </div>
    </div>
  );
}
