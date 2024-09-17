import { ReactElement } from "react";
import About from "./about";
import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Partner from "./partner";
import Features from "../features/Features";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <About />
      <HowTo />
      <Features />
      <Partner />
    </>
  );
};

export default Home;
