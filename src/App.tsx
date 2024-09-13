import About from "./components/about/About";
import HeroSection from "./components/HeroSection/HeroSection";
import Service from "./components/Service/Service";
import HowTo from "./layout/how-to/HowTo";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Service />
        <About />
        <HowTo />
      </Layout>
    </>
  );
};

export default App;
