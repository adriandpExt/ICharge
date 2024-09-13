import About from "./components/about/About";
import HeroSection from "./components/HeroSection/HeroSection";
import Service from "./components/Service/Service";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Service />
        <About />
      </Layout>
    </>
  );
};

export default App;
