import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import useScroll from "@/hooks/useScroll";
import { LinkList } from "./type";
import { ChevronDown } from "lucide-react";
import { SvgIcons } from "../svg-icons";

import { Drawer } from "./component";

import { Label } from "../ui/label";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";
import { cn } from "@/lib/utils";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const NavBar = () => {
  const { t } = useTranslation();
  const { language, handleLanguageChange } = useLanguageSwitcher();
  const navigate = useNavigate();
  const location = useLocation();
  const isScroll = useScroll(window.innerHeight);

  const footerClass =
    location.pathname === "/terms-and-conditions"
      ? "bg-gradient-to-t from-[#055c00] to-[#022700]"
      : null;

  const handleBackHome = () => {
    return navigate("/");
  };

  const linkList: LinkList[] = [
    {
      label: t(LocalizationKey.navigation.howTo),
      path: "/how-to",
    },
    {
      label: "Solutions",
      subChild: [
        {
          label: "ICharge Solution",
          path: "/icharge-solution",
        },
        {
          label: "IScreen Solution",
          path: "/iscreen-solution",
        },
      ],
    },
    {
      label: t(LocalizationKey.navigation.about),
      path: "/about",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
  ];

  const renderNavigation = () => {
    return (
      <div className="hidden gap-1 lg:flex">
        {linkList.map((item) => {
          const isActive = location.pathname === item.path;

          return item.subChild ? (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger
                className={cn(
                  "inline-flex items-center justify-center gap-2 font-poppins text-sm font-normal focus-visible:outline-none focus-visible:ring-0",
                  isActive &&
                    "font-bold text-white underline underline-offset-4",
                  isScroll ? "text-black" : "text-white",
                )}
              >
                {/* <Button
                  variant="link"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 font-poppins text-sm font-normal focus-visible:outline-none focus-visible:ring-0",
                    isActive &&
                      "font-bold text-white underline underline-offset-4",
                    isScroll ? "text-black" : "text-white",
                  )}
                > */}
                {item.label}
                <ChevronDown size={20} />
                {/* </Button> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 border-none bg-white">
                {item.subChild.map((sub) => (
                  <DropdownMenuItem className="p-0" key={sub.label}>
                    <NavLink
                      to={sub.path as string}
                      className={cn(
                        "inline-flex w-full items-center justify-start rounded-md px-4 py-2 font-poppins text-sm font-normal hover:bg-gray-100 hover:underline hover:underline-offset-4",
                        isActive && "font-bold underline underline-offset-4",
                      )}
                    >
                      {sub.label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink
              key={item.label}
              to={item.path as string}
              className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2 font-poppins text-sm font-normal hover:underline hover:underline-offset-4",
                isActive && "font-bold text-white underline underline-offset-4",
                isScroll ? "text-black" : "text-white",
              )}
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex h-14 w-full items-center justify-between px-4 py-14 backdrop-blur-3xl transition-all lg:relative lg:backdrop-blur-none ${
        isScroll &&
        "border-b-[1px] bg-gradient-to-t from-[#055c00] to-[#022700]"
      } ${footerClass}`}
    >
      <Button variant={"icon"} onClick={handleBackHome}>
        <SvgIcons name="ic_icharge_white" size={150} />
      </Button>

      {renderNavigation()}

      <div className="flex items-center">
        <div className="hidden flex-row gap-2 lg:flex">
          {language.map(({ lng, active, code }, index) => {
            return (
              <Label
                key={index}
                className={cn(
                  "p-2 text-white hover:rounded-md hover:font-extrabold",
                  active ? "rounded-md bg-white/10 font-extrabold" : "",
                )}
                onClick={() => handleLanguageChange(index, code)}
              >
                {lng}
              </Label>
            );
          })}
        </div>

        <Drawer />
      </div>
    </header>
  );
};

export default NavBar;
