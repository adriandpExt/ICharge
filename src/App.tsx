import { Outlet } from "react-router-dom";

import Layout from "./layout/Layout";
import { AosInitializer } from "./lib/aosInitializer";

const App = () => {
  return (
    <div className="dark:bg-black">
      <Layout>
        <AosInitializer />
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
