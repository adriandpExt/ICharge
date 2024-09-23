import { ReactElement } from "react";

import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Features from "./features/Features";
import CarouselCompany from "./company-carousel";
import Sector from "./sector";
import Services from "./service/service";
import WhyICharge from "./why-icharge/WhyIcharge";
import BookDemo from "./book-demo/BookDemo";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CarouselCompany />
      <WhyICharge />
      <Services />
      <HowTo />
      <Features />
      <Sector />
      <BookDemo />
    </>
  );
};

export default Home;
