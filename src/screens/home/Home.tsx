import { ReactElement } from "react";

import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Partner from "./partner";
import Features from "./features/Features";
import CarouselCompany from "./company-carousel";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CarouselCompany />
      <HowTo />
      <Features />
      <Partner />
    </>
  );
};

export default Home;
