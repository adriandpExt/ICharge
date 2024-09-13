import { Button } from "../ui/button";
import { Sun } from "lucide-react";
import Drawer from "./Drawer";
import { linkList } from "./utils";
import { SvgIcons } from "../svg-icons";

export const NavBar = () => {
  return (
    <div className="border-b-2">
      <header className="container mx-auto flex h-14 items-center justify-between px-4 py-6 transition-all">
        <SvgIcons name="ic_svl_gs2" size={150} />

        <nav className="hidden space-x-6 md:flex">
          {linkList.map((item) => (
            <a href="#" className="text-gray-600 hover:text-gray-800">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden lg:inline-flex">
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
