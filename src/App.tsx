import About from "./screens/about/About";
import Layout from "./layout/Layout";
import HeroSection from "./screens/HeroSection";
import HowTo from "./screens/how-to";
import Service from "./screens/Service";
import ProductRange from "./components/product/product";

const App = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Service />
        <About />
        <HowTo />
        <ProductRange />
      </Layout>
    </>
  );
};

export default App;
