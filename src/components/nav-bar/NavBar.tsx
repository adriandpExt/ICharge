import { Link, useLocation, useNavigate } from "react-router-dom";

// import { Moon, Sun } from "lucide-react";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import { SvgIcons } from "../svg-icons";

import useScroll from "@/hooks/useScroll";

// import { useTheme } from "@/hooks/useTheme";

import { Drawer, Language } from "./component";
import { linkList } from "./utils";

export const NavBar = () => {
  // const { theme, setTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const isScroll = useScroll(window.innerHeight);

  const handleBackHome = () => {
    return navigate("/");
  };

  const renderNavibation = () => {
    return (
      <nav className="hidden space-x-6 lg:flex">
        {linkList.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <div key={item.path} className="flex items-center">
              <Button
                variant="link"
                className={`font-poppins hover:text-gray-500 hover:no-underline ${
                  isActive ? "font-bold text-white underline" : ""
                } ${isScroll ? "text-black" : "text-white"}`}
              >
                <Link to={item.path as string}>{item.label}</Link>
              </Button>
              {index < linkList.length - 1 && (
                <Separator
                  orientation="vertical"
                  className={`mx-4 h-8 ${isScroll ? "bg-black" : "bg-white"}`}
                />
              )}
            </div>
          );
        })}
      </nav>
    );
  };

  return (
    <header
      className={`relative top-0 z-50 mx-auto flex h-14 w-full items-center justify-between px-4 py-14 backdrop-blur-3xl transition-all lg:h-28 ${
        isScroll ? "border-b-[1px] bg-white" : "bg-transparent"
      }`}
    >
      <Button variant={"icon"} onClick={handleBackHome}>
        <SvgIcons name="ic_svl_ig" size={60} />
      </Button>

      {renderNavibation()}

      <div className="flex items-center">
        {/* <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun
            className={`${
              isScroll ? "text-black" : "text-white"
            } h-[1.5rem] w-[1.3rem] dark:hidden`}
          />
          <Moon
            className={`${
              isScroll ? "text-black" : "text-white"
            } hidden h-5 w-5 dark:block`}
          />
        </Button> */}

        <Drawer />

        {/* Language Selection */}
        <Language />
      </div>
    </header>
  );
};

export default NavBar;
