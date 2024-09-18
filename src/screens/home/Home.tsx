import { ReactElement } from "react";
import About from "./about";
import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Partner from "./partner";
import CarouselCompany from "../company-carousel/CompanyCarousel";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CarouselCompany />
      <HowTo />
      <About />
      <Partner />
    </>
  );
};

export default Home;
