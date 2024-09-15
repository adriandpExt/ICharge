import About from "./screens/about/About";
import Layout from "./layout/Layout";
import HeroSection from "./screens/HeroSection";
import HowTo from "./screens/how-to";
import Service from "./screens/Service";
import ProductRange from "./components/product/product";
import SpotlightStories from "./components/spotlight-stories/spotlight";

const App = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Service />
        <About />
        <ProductRange />
        <SpotlightStories />
        <HowTo />
      </Layout>
    </>
  );
};

export default App;
