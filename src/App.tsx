import { Suspense } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

import Layout from "./layout/Layout";
import { AosInitializer } from "./lib/aosInitializer";
import { Toaster } from "@/components/ui/toaster";
import { Spinner } from "./components";

const App = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isBusinessCardPage =
    location.pathname.startsWith("/business-card") ||
    location.pathname.startsWith("/qr-code");

  return (
    <Suspense
      fallback={
        <div className="flex h-[100vh] items-center justify-center bg-[#E5E7E9]">
          <Spinner />
        </div>
      }
    >
      {!isBusinessCardPage ? (
        <Layout>
          <AosInitializer />
          <Outlet />
          <Toaster />
        </Layout>
      ) : (
        <div>
          <Outlet context={{ id }} />
        </div>
      )}
    </Suspense>
  );
};

export default App;
