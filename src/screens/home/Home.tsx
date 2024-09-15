import { ReactElement } from "react";
import About from "./about";
import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Partner from "./partner";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <About />
      <HowTo />
      <Partner />
    </>
  );
};

export default Home;
