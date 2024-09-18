import { Outlet } from "react-router-dom";

import Layout from "./layout/Layout";
import { AosInitializer } from "./lib/aosInitializer";

const App = () => {
  return (
    <>
      <Layout>
        <AosInitializer />
        <Outlet />
      </Layout>
    </>
  );
};

export default App;
