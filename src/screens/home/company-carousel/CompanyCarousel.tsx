import { useRef, useEffect, useState } from "react";
import Dunkin from "@/assets/Products/dunkin.png";
import Ikea from "@/assets/Products/ikea.png";
import MaryGrace from "@/assets/Products/marygrace.png";
import AyalaMalls from "@/assets/Products/ayalamalls.png";
import Robinsons from "@/assets/Products/robinsons.png";
import Angkan from "@/assets/Products/angkan.png";
import { useAnimation, useDragControls, motion } from "framer-motion";

// const SCROLL_SPEED = 0.5;

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
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const dragControls = useDragControls();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const infiniteScroll = async () => {
      while (true) {
        await controls.start({
          x: -width,
          transition: { duration: 20, ease: "linear" },
        });
        await controls.start({ x: 0, transition: { duration: 0 } });
      }
    };
    infiniteScroll();
  }, [controls, width]);

  return (
    <div
      className="container relative mx-auto overflow-hidden rounded-3xl border-green-400 bg-green-100"
      data-aos="zoom-in"
    >
      <div className="bg-green-300 bg-gradient-to-b p-4">
        <h2 className="text-center text-2xl font-extrabold text-black">
          Our Trusted Partners
        </h2>
      </div>
      <div className="flex h-36 place-items-center p-4">
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragControls={dragControls}
            dragConstraints={{ right: 0, left: -width }}
            animate={controls}
            className="flex"
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="mx-4 flex h-16 min-w-[150px] items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
