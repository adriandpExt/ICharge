import { useRef, useEffect } from "react";
import Dunkin from "@/assets/Products/dunkin.png";
import Ikea from "@/assets/Products/ikea.png";
import MaryGrace from "@/assets/Products/marygrace.png";
import AyalaMalls from "@/assets/Products/ayalamalls.png";
import Robinsons from "@/assets/Products/robinsons.png";
import Angkan from "@/assets/Products/angkan.png";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

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
  const carousel = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const carouselElement = carousel.current;
    let scrollPosition = 0;
    const scrollStep = 1; // Adjust the scroll speed
    const scrollInterval = 20; // Interval in milliseconds

    if (carouselElement) {
      const scrollWidth = carouselElement.scrollWidth;

      const startInfiniteScroll = () => {
        scrollPosition += scrollStep;
        if (scrollPosition >= scrollWidth / 2) {
          scrollPosition = 0;
        }
        carouselElement.scrollTo(scrollPosition, 0);
      };

      // Use setInterval for controlled scrolling
      const interval = setInterval(startInfiniteScroll, scrollInterval);

      // Clear interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className="container relative mx-auto overflow-hidden border-green-400 bg-green-100 lg:rounded-3xl">
      <div className="flex flex-col bg-green-300 bg-gradient-to-b p-4">
        <Label variant={"title"} className="text-center text-2xl">
          {t(LocalizationKey.home.companyCarousel)}
        </Label>
      </div>
      <div className="flex h-36 place-items-center p-4">
        <div
          ref={carousel}
          className="flex space-x-8 overflow-hidden whitespace-nowrap"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-4 flex h-16 min-w-[150px] items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
