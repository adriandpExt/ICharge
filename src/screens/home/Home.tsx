import { ReactElement } from "react";

import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Products from "./products/Products";

import Sector from "./sector";
import Services from "./service/service";
import WhyICharge from "./why-icharge/WhyIcharge";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />

      <WhyICharge />
      <Services />
      <Products />
      <HowTo />

      <Sector />
    </>
  );
};

export default Home;
