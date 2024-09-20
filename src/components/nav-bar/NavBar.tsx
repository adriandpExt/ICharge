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

import useScroll from "@/hooks/useScroll";
import Drawer from "./Drawer";
import { linkList } from "./utils";
import { Separator } from "../ui/separator";
import { Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleValueChange = (value: string) => {
    setSelectedLanguage(value);
    handleChangeLanguage(value);
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isScroll = useScroll(window.innerHeight);

  const handleBackHome = () => {
    return navigate("/");
  };

  const renderNavibation = () => {
    return (
      <nav className="hidden space-x-6 lg:flex">
        {linkList.map((item, index) => {
          const isActive = location.pathname === item.path; // Check if the current path matches the link path

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
      className={`sticky top-0 z-50 mx-auto flex h-28 w-full items-center justify-between px-4 py-6 backdrop-blur-sm transition-all ${
        isScroll ? "border-b-[1px] bg-white" : "bg-transparent"
      }`}
    >
      <Button variant={"icon"} onClick={handleBackHome}>
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
            className={`${
              isScroll ? "text-black" : "text-white"
            } h-[1.5rem] w-[1.3rem] dark:hidden`}
          />
          <Moon
            className={`${
              isScroll ? "text-black" : "text-white"
            } hidden h-5 w-5 dark:block`}
          />
        </Button>

        <Drawer />

        {/* Language Selection */}
        <Select onValueChange={handleValueChange} value={selectedLanguage}>
          <SelectTrigger
            className={`hidden w-auto items-center justify-start space-x-2 whitespace-nowrap lg:flex ${
              isScroll ? "text-black" : "text-white"
            }`}
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
              <SelectItem value="en">
                <div className="flex items-center">
                  <SvgIcons name="ic_uk_flag" size={30} />
                  <span className="ml-2">En</span>
                </div>
              </SelectItem>
              <SelectItem value="ph">
                <div className="flex items-center">
                  <SvgIcons name="ic_ph_flag" size={30} />
                  <span className="ml-2">Ph</span>
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
