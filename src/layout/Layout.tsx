import { PropsWithChildren } from "react";

import { Footer, NavBar } from "@/components";

import { CookieAlert } from "@/screens/cookies";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-[url('@/assets/landing_bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="relative z-10">
        <NavBar />

        <main>{children}</main>

        <CookieAlert />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
