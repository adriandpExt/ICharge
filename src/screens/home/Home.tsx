import { ReactElement } from "react";
import About from "./about";
import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Partner from "./partner";
import Features from "./features/Features";
import CarouselCompany from "../company-carousel/CompanyCarousel";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CarouselCompany />
      <Features />
      <About />
      <HowTo />
      <Partner />
    </>
  );
};

export default Home;
