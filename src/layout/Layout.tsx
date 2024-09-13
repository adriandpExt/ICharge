import { NavBar } from "@/components/nav-bar";
import { Separator } from "@/components/ui/separator";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <Separator />
      <main className="container mx-auto flex items-center py-24 md:py-32">
        {children}
      </main>
    </>
  );
};

export default Layout;
