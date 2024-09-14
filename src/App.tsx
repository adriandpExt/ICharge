import Layout from "./layout/Layout";

import About from "./screens/about/About";
import HeroSection from "./screens/HeroSection";
import HowTo from "./screens/how-to";
import Partner from "./screens/partner";

const App = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <About />
        <HowTo />
        <Partner />
      </Layout>
    </>
  );
};

export default App;
