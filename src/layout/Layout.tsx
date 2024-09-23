import { Footer } from "@/components";
import { NavBar } from "@/components/nav-bar";

import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main className="bg-[url('@/assets/landing_bg.svg')] bg-cover bg-no-repeat">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
