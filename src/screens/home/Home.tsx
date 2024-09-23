import { ReactElement } from "react";

import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Features from "./features/Features";
import CarouselCompany from "./company-carousel";
import Sector from "./sector";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CarouselCompany />
      <HowTo />
      <Features />
      <Sector />
    </>
  );
};

export default Home;
