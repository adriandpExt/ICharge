import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import backgroundImage from "@/assets/man-using-smartphone.png"; // Adjust this path to match your project structure

export default function ImageParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <img
          src={backgroundImage}
          alt="background"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </motion.div>
    </div>
  );
}
