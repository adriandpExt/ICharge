import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import useScroll from "@/hooks/useScroll";

import { SvgIcons } from "../svg-icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Drawer, Language } from "./component";
import { linkList } from "./utils";

import { Label } from "../ui/label";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isScroll = useScroll(window.innerHeight);

  const handleBackHome = () => {
    return navigate("/");
  };

  const renderNavigation = () => {
    return (
      <NavigationMenu className="hidden gap-5 lg:flex">
        <NavigationMenuList>
          {linkList.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <NavigationMenuItem key={index}>
                {item?.subChild && item.subChild.length > 0 ? (
                  <>
                    <NavigationMenuTrigger
                      className={`w-full list-none font-normal text-white hover:text-gray-500 focus:text-white ${isScroll ? "text-black" : "text-white"} `}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 border-r-4 border-t-4 border-white bg-white py-4 shadow-inner shadow-white">
                        <ul className="items-center space-y-1">
                          {item.subChild.map((sub) => (
                            <li
                              className="flex items-center gap-2 px-5 hover:bg-[#033800] hover:text-white"
                              key={sub.label}
                            >
                              <Button
                                variant="link"
                                className="gap-2 bg-none py-7 text-left text-black hover:no-underline"
                              >
                                <Avatar>
                                  <AvatarFallback className="bg-[#38D430]">
                                    <SvgIcons name="ic_apple" size={20} />
                                  </AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col whitespace-pre-wrap">
                                  <Label
                                    variant={"default"}
                                    className="hover:text-white"
                                  >
                                    {sub.label}
                                  </Label>
                                  <Label
                                    variant={"default"}
                                    className="text-xs text-gray-500"
                                  >
                                    {sub.sublabel}
                                  </Label>
                                </div>
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Button
                    variant="link"
                    className={`font-normal hover:text-gray-500 hover:no-underline ${
                      isActive ? "font-bold text-white underline" : ""
                    } ${isScroll ? "text-black" : "text-white"}`}
                  >
                    <Link to={item.path as string} className="font-poppins">
                      {item.label}
                    </Link>
                  </Button>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex h-14 w-full items-center justify-between px-4 py-14 backdrop-blur-3xl transition-all lg:relative lg:h-28 ${location.pathname !== "/" && "bg-gradient-to-t from-[#055c00] to-[#022700]"} ${
        isScroll
          ? "border-b-[1px] bg-gradient-to-t from-[#055c00] to-[#022700]"
          : "bg-transparent"
      }`}
    >
      <Button variant={"icon"} onClick={handleBackHome}>
        <SvgIcons name="ic_icharge_white" size={150} />
      </Button>

      {renderNavigation()}

      <div className="flex items-center">
        <Drawer />
        <Language />
      </div>
    </header>
  );
};

export default NavBar;
