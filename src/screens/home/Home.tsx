import { ReactElement } from "react";

import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Products from "./products/Products";

import Sector from "./sector";

import WhyICharge from "./why-icharge/WhyIcharge";
import Services from "./service";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />

      <WhyICharge />
      <Sector />
      <Services />
      <Products />
      <HowTo />

      <Sector />
    </>
  );
};

export default Home;
