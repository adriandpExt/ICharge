import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./screens/home";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<>Fuck</>} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
