import About from "./screens/about/About";
import Layout from "./layout/Layout";
import HeroSection from "./screens/HeroSection";
import HowTo from "./screens/how-to";
import Service from "./screens/Service";

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
