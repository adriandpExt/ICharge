import { Button } from "../ui/button";
import { Zap } from "lucide-react";

export const NavBar = () => {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-6">
      <div className="flex items-center">
        <Zap className="h-8 w-8 text-green-500" />
        <span className="ml-2 text-2xl font-bold text-gray-800">icharge</span>
      </div>
      <nav className="hidden space-x-6 md:flex">
        <a href="#" className="text-gray-600 hover:text-gray-800">
          How To
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Features
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Partner with Us
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="hidden md:inline-flex">
          Android
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
