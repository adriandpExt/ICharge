import { Footer } from "@/components";
import { NavBar } from "@/components/nav-bar";

import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main className="container mx-auto dark:bg-background">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
