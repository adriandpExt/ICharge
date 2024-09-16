import { Sun } from "lucide-react";

import { Button } from "../ui/button";

import { SvgIcons } from "../svg-icons";
import { useStore } from "@/store/useStore";

import Drawer from "./Drawer";

import { linkList } from "./utils";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const { scrollToSection } = useStore();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-all ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <header className="container mx-auto flex h-14 items-center justify-between px-4 py-6 transition-all">
        <Button variant={"icon"}>
          <SvgIcons name="ic_svl_gs2" size={150} />
        </Button>

        <nav className="hidden space-x-6 md:flex">
          {linkList.map(({ item, id }) => (
            <Button
              key={item}
              variant="link"
              className={`font-semibold hover:text-gray-500 hover:no-underline ${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => scrollToSection(id)}
            >
              {item}
            </Button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden bg-green-500 hover:bg-green-800 lg:inline-flex"
          >
            Android
          </Button>
          <Sun className="text-gray-600" />

          <Drawer />
        </div>
      </header>
    </div>
  );
};

export default NavBar;
