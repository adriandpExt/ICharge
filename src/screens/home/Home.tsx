import { ReactElement } from "react";

import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Features from "./products/Products";
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
      <Features />
      <HowTo />

      <Sector />
      <BookDemo />
    </>
  );
};

export default Home;
