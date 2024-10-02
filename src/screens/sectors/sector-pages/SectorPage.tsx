import Benefits from "./components/Benefits";
import CaseStudy from "./components/CaseStudy";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import BookDemo from "@/components/book-demo";
import { FeatureCardProps } from "./types";

const SectorPage = ({ title }: Omit<FeatureCardProps, "description">) => {
  return (
    <section>
      <Header title={title} />
      <Benefits />
      <CaseStudy />
      <Gallery />
      <BookDemo />
    </section>
  );
};

export default SectorPage;
