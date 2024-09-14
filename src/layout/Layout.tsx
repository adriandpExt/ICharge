import { Footer } from "@/components";
import FAQPage from "@/components/faq/faq";
import { NavBar } from "@/components/nav-bar";
import { Separator } from "@/components/ui/separator";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Separator />
      <main className="container mx-auto flex-1">{children}</main>
      {/* <FAQPage /> */}
      <Footer />
    </div>
  );
};

export default Layout;
