import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./screens/home";
import Faqs from "./screens/faqs";
import ErrorScreen from "./screens/error-screen";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />

          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
