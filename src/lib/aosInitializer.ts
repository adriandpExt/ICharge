import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AosInitializer = () => {
  const [, setModalRendered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const timer = setTimeout(() => {
      setModalRendered(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};