import Benefits from "./components/Benefits";
import BookDemoCard from "./components/BookDemo";
import CaseStudy from "./components/CaseStudy";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

const Hospitality = () => {
  return (
    <section>
      <Header />
      <Benefits />
      <CaseStudy />
      <Gallery />
      <BookDemoCard />
    </section>
  );
};

export default Hospitality;
