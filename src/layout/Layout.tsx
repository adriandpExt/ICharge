import { Footer } from "@/components";
import { NavBar } from "@/components/nav-bar";
import Alertcookies from "@/screens/cookies/cookiesalert";
import clsx from "clsx";

import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  const dynamicBG = clsx(
    location.pathname === "/sustainability"
      ? "bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-fixed bg-bottom "
      : "bg-[url('@/assets/landing_bg.svg')] bg-cover bg-no-repeat bg-center",
  );

  return (
    <div className={`${dynamicBG} relative`}>
      {location.pathname === "/sustainability" && (
        <div className="absolute inset-0 z-0 bg-black opacity-65" />
      )}

      <div className="relative z-10">
        <NavBar />
        <main>{children}</main>
        <Alertcookies />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
