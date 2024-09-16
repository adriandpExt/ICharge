import { Sun } from "lucide-react";

import { Button } from "../ui/button";

import { SvgIcons } from "../svg-icons";
import { useStore } from "@/store/useStore";

import Drawer from "./Drawer";

import { linkList } from "./utils";

export const NavBar = () => {
  const { scrollToSection } = useStore();
  return (
    <div className="absolute top-0 w-full border-b-2">
      <header className="container mx-auto flex h-14 items-center justify-between px-4 py-6 transition-all">
        <Button variant={"icon"} onClick={() => scrollToSection("howToPage")}>
          <SvgIcons name="ic_svl_gs2" size={150} />
        </Button>

        <nav className="hidden space-x-6 md:flex">
          {linkList.map((item) => (
            <a
              key={item}
              href="#"
              className="font-semibold text-gray-600 hover:text-gray-900"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden bg-green-500 hover:bg-green-800 lg:inline-flex"
          >
            Android
          </Button>
          <Sun />

          <Drawer />
        </div>
      </header>
    </div>
  );
};

export default NavBar;
