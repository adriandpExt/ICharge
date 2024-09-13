import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
