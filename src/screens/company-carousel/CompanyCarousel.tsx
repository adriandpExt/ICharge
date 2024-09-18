import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";

const SCROLL_SPEED = 0.5;

interface Logo {
  name: string;
  src: string;
}

const logos: Logo[] = [
  { name: "Robinsons Malls", src: "/placeholder.svg?height=40&width=120" },
  { name: "Dunkin", src: "/placeholder.svg?height=40&width=120" },
  { name: "Ayala Malls", src: "/placeholder.svg?height=40&width=120" },
  { name: "Mary Grace", src: "/placeholder.svg?height=40&width=120" },
  { name: "Ikea", src: "/placeholder.svg?height=40&width=120" },
  { name: "Google", src: "/placeholder.svg?height=40&width=120" },
];

const CarouselCompany: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const totalWidth = scrollContainer.scrollWidth;
    let currentPosition = 0;

    const scroll = () => {
      currentPosition -= SCROLL_SPEED; // Move by SCROLL_SPEED pixels to the left
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
    <div className="] relative -top-40 w-full overflow-hidden rounded-tl-3xl rounded-tr-3xl bg-[#fff] py-10 md:rounded-tl-[4rem] md:rounded-tr-[4rem]">
      <h2 className="mb-8 text-center text-2xl font-bold text-primary">
        Our Trusted Partners
      </h2>
      <div ref={scrollRef} className="flex items-center gap-12 px-12">
        {[...logos, ...logos].map((logo, index) => (
          <Card
            key={index}
            className="flex h-24 w-48 shrink-0 items-center justify-center p-4 transition-all hover:shadow-md"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-full max-w-full object-contain"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarouselCompany;
