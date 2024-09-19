import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Dunkin from "@/assets/Products/dunkin.png";

const SCROLL_SPEED = 0.5;

interface Logo {
  name: string;
  src: string;
}

const logos: Logo[] = [
  { name: "Robinsons Malls", src: Dunkin },
  { name: "Dunkin", src: Dunkin },
  { name: "Ayala Malls", src: Dunkin },
  { name: "Mary Grace", src: Dunkin },
  { name: "Ikea", src: Dunkin },
  { name: "Google", src: Dunkin },
];

const CarouselCompany: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const totalWidth = scrollContainer.scrollWidth;
    let currentPosition = 0;

    const scroll = () => {
      currentPosition -= SCROLL_SPEED;
      if (currentPosition <= -totalWidth / 2) {
        currentPosition = 0;
      }
      scrollContainer.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(scroll);
    };

    const animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className="relative -top-40 w-full overflow-hidden rounded-tl-3xl rounded-tr-3xl border-2 border-green-400 bg-[#043B00] py-10 shadow-xl md:rounded-bl-[4rem] md:rounded-br-[4rem] md:rounded-tl-[4rem] md:rounded-tr-[4rem]"
      data-aos="flip-up"
    >
      <h2 className="font-poppins mb-8 text-center text-2xl font-bold text-white">
        Our Trusted Partners
      </h2>
      <div ref={scrollRef} className="flex items-center gap-12 px-12">
        {[...logos, ...logos].map((logo, index) => (
          <Card
            key={index}
            className="flex h-24 w-48 shrink-0 items-center justify-center border-0 p-4 transition-all"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-full max-w-full bg-transparent object-contain"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarouselCompany;
