import { Button } from "../ui/button";
import { Sun, Zap } from "lucide-react";
import Drawer from "./Drawer";
import { linkList } from "./utils";

export const NavBar = () => {
  return (
    <div className="border-b-2">
      <header className="container mx-auto flex h-14 items-center justify-between px-4 py-6 transition-all">
        <div className="flex items-center">
          <Zap className="h-8 w-8 text-green-500" />
          <p className="ml-2 text-2xl font-bold text-gray-800">
            <span className="text-green-500">i</span>charge
          </p>
        </div>

        <nav className="hidden space-x-6 md:flex">
          {linkList.map((item) => (
            <a href="#" className="text-gray-600 hover:text-gray-800">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
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
