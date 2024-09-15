import { useNavigate } from "react-router-dom";
import { Sun } from "lucide-react";

import { Button } from "../ui/button";

import { SvgIcons } from "../svg-icons";

import Drawer from "./Drawer";

import { linkList } from "./utils";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <div className="border-b-2">
      <header className="container mx-auto flex h-14 items-center justify-between px-4 py-6 transition-all">
        <Button variant={"icon"} onClick={handleNavigateHome}>
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
          <Button className="hidden bg-green-500 hover:bg-green-800 lg:inline-flex">
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
