import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        body
      </main>
      <main>body</main>
      <Footer />
    </>
  );
};

export default Layout;
