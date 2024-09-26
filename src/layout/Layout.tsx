import { NavBar } from "@/components/nav-bar";
import { Separator } from "@/components/ui/separator";

import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Separator />
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
