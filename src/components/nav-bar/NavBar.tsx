import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { IconName } from "../svg-icons/utils";
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
                      <div
                        className="grid w-[400px] gap-3 rounded-[1rem] py-4 shadow-inner shadow-green-100"
                        style={{
                          background:
                            "radial-gradient(circle, rgb(50, 50, 50) 0%, rgb(20, 20, 20) 100%)",
                        }}
                      >
                        <ul className="items-center space-y-1 rounded">
                          {item.subChild.map((sub) => (
                            <Link to={sub.path as string} key={sub.label}>
                              <li className="flex items-center gap-2 px-5 hover:bg-[#464745] hover:text-white">
                                <Button
                                  variant="link"
                                  className="gap-2 bg-none py-7 text-left text-white hover:no-underline"
                                >
                                  <Avatar>
                                    <AvatarFallback className="bg-[#21851c]">
                                      <SvgIcons
                                        name={sub.icon as IconName}
                                        size={20}
                                      />
                                    </AvatarFallback>
                                  </Avatar>

                                  <div className="flex flex-col whitespace-pre-wrap">
                                    <Label variant={"default"}>
                                      {sub.label}
                                    </Label>
                                    <Label
                                      variant={"default"}
                                      className="text-[10px] text-gray-300"
                                    >
                                      {sub.sublabel}
                                    </Label>
                                  </div>
                                </Button>
                              </li>
                            </Link>
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
      className={`sticky top-0 z-50 mx-auto flex h-14 w-full items-center justify-between px-4 py-14 backdrop-blur-3xl transition-all lg:relative lg:backdrop-blur-none ${location.pathname === "/news" && "bg-gradient-to-t from-[#055c00] to-[#022700]"} ${
        isScroll &&
        "border-b-[1px] bg-gradient-to-t from-[#055c00] to-[#022700]"
      } `}
    >
      <Button variant={"icon"} onClick={handleBackHome}>
        <SvgIcons name="ic_icharge_white" size={150} />
      </Button>

      {renderNavigation()}

      <div className="flex items-center">
        <Language />
        <Drawer />
      </div>
    </header>
  );
};

export default NavBar;
