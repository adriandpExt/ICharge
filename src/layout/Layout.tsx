import { Footer } from "@/components";
import { NavBar } from "@/components/nav-bar";
import Alertcookies from "@/screens/cookies/cookiesalert";

import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main className="dark:bg-white">{children}</main>
      <Alertcookies />
      <Footer />
    </>
  );
};

export default Layout;
