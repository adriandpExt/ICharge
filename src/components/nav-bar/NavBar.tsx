import { Button } from "../ui/button";

import { SvgIcons } from "../svg-icons";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useStore } from "@/store/useStore";
import useScroll from "@/hooks/useScroll";

import Drawer from "./Drawer";

import { linkList } from "./utils";

import { Separator } from "../ui/separator";
import { Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const NavBar = () => {
  const { scrollToSection } = useStore();
  const { theme, setTheme } = useTheme();

  const isScroll = useScroll(window.innerHeight);

  const renderNavibation = () => {
    return (
      <nav className="hidden space-x-6 lg:flex">
        {linkList.map(({ item, id }, index) => (
          <>
            <Button
              key={item}
              variant="link"
              className={`font-semibold hover:text-gray-500 hover:no-underline ${isScroll ? "text-black" : "text-white"} `}
              onClick={() => scrollToSection(id)}
            >
              {item}
            </Button>
            {index < linkList.length - 1 && (
              <Separator
                orientation="vertical"
                className={`mx-4 h-8 ${isScroll ? "bg-black" : "bg-white"}`}
              />
            )}
          </>
        ))}
      </nav>
    );
  };
  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex h-28 w-full items-center justify-between px-4 py-6 backdrop-blur-sm transition-all ${
        isScroll ? "bg-white" : "bg-transparent"
      }`}
    >
      <Button variant={"icon"}>
        <SvgIcons name="ic_svl_ig" size={60} />
      </Button>

      {renderNavibation()}

      <div className="flex items-center">
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun
            className={`${isScroll ? "text-black" : "text-white"} h-[1.5rem] w-[1.3rem] dark:hidden`}
          />
          <Moon
            className={`${isScroll ? "text-black" : "text-white"} hidden h-5 w-5 dark:block`}
          />
        </Button>

        <Drawer />

        <Select>
          <SelectTrigger
            className={`hidden w-auto items-center justify-start space-x-2 whitespace-nowrap lg:flex ${isScroll ? "text-black" : "text-white"}`}
          >
            <SelectValue
              placeholder={
                <div className="flex items-center gap-1">
                  <Globe />
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent
            className={`${isScroll ? "text-black" : "text-white"}`}
          >
            <SelectGroup>
              <SelectItem value="chinese">
                <div className="flex items-center">
                  <span>Chinese</span>
                </div>
              </SelectItem>
              <SelectItem value="english">
                <div className="flex items-center">
                  <span>English</span>
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

export default NavBar;
