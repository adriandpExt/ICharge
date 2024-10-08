import { Outlet } from "react-router-dom";

import Layout from "./layout/Layout";
import { AosInitializer } from "./lib/aosInitializer";
import { Suspense } from "react";
import Spinner from "./components/spinner/Spinner";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-[100vh] items-center justify-center bg-[#E5E7E9]">
          <Spinner />
        </div>
      }
    >
      <Layout>
        <AosInitializer />
        <Outlet />
      </Layout>
    </Suspense>
  );
};

export default App;
