import { useRef, useEffect } from "react";
import Dunkin from "@/assets/Products/dunkin.png";
import Ikea from "@/assets/Products/ikea.png";
import MaryGrace from "@/assets/Products/marygrace.png";
import AyalaMalls from "@/assets/Products/ayalamalls.png";
import Robinsons from "@/assets/Products/robinsons.png";
import Angkan from "@/assets/Products/angkan.png";

const SCROLL_SPEED = 0.5;

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
      <h2 className="mb-8 text-center font-poppins text-2xl font-bold text-white">
        Our Trusted Partners
      </h2>
      <div ref={scrollRef} className="flex items-center gap-12 px-12">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex h-24 w-48 shrink-0 items-center justify-center border-0 p-4 transition-all"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCompany;
