import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Building2, Handshake, Menu, Phone } from "lucide-react";

// import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// import { IconName } from "@/components/svg-icons/utils";
import { SvgIcons } from "@/components/svg-icons";

// import { language } from "../utils";
import LocalizationKey from "@/i18n/key";
import { LinkList } from "../type";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import { Separator } from "@/components/ui/separator";

export const Drawer = () => {
  const { t } = useTranslation();
  // const { selectedLanguage, handleValueChange } = useLanguageSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const { language, handleLanguageChange } = useLanguageSwitcher();

  const navigate = useNavigate();
  const location = useLocation();

  const handleBackHome = () => {
    closeDrawer();
    navigate("/");
  };

  const closeDrawer = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const linkList: LinkList[] = [
    {
      label: t(LocalizationKey.navigation.partnerwithUs),
      path: "/partner",
      icon: Handshake,
    },
    {
      label: t(LocalizationKey.navigation.services),
      path: "/services",
      icon: Phone,
    },
    {
      label: t(LocalizationKey.navigation.about),
      path: "/about",
      icon: Building2,
    },
  ];

  const renderDrawerMenu = () => {
    return linkList.map((item, index) =>
      item.subChild && item.subChild.length > 0 ? (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem
            value={`item-${index}`}
            className="flex flex-col justify-between border-b-0"
          >
            <AccordionTrigger className="group h-8 w-full border-none px-4 font-[600] hover:no-underline data-[state=open]:rounded-tl-xl data-[state=open]:rounded-tr-xl data-[state=open]:bg-[#38D430] data-[state=open]:text-white">
              {item.icon && (
                <item.icon
                  id="sector"
                  className="mr-2 group-data-[state=closed]:text-green-500 group-data-[state=open]:text-white"
                />
              )}
              {item.label}
            </AccordionTrigger>
            <AccordionContent className="rounded-bl-xl rounded-br-xl border-none bg-[#38D430] px-4 text-left text-white">
              <ul className="space-y-2">
                {item.subChild.map((child, childIndex) => (
                  <li key={childIndex} className="ml-8">
                    <Link to={child.path as string} onClick={closeDrawer}>
                      <Label>{child.label}</Label>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <Button
          key={index}
          variant="ghost"
          className={`flex items-center justify-start rounded-xl ${
            location.pathname === item.path && "bg-[#38D430]"
          }`}
          onClick={closeDrawer}
        >
          {item.icon && (
            <item.icon
              className={`mr-2 text-green-500 ${location.pathname === item.path && "text-white"}`}
            />
          )}
          <Link to={item.path as string} className="font-poppins">
            <Label
              className={`${location.pathname === item.path && "text-white"}`}
            >
              {item.label}
            </Label>
          </Link>
        </Button>
      ),
    );
  };

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(isOpen) => {
        setIsOpen(isOpen);
      }}
    >
      <SheetTrigger>
        <Menu
          size={30}
          className="inline-flex text-white lg:hidden"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col bg-white">
        <SheetHeader>
          <SheetTitle className="flex justify-center" onClick={handleBackHome}>
            <SvgIcons name="ic_svl_g2" size={150} />
          </SheetTitle>
          <SheetDescription />
          <div className="flex flex-col space-y-2">{renderDrawerMenu()}</div>
        </SheetHeader>
        <Separator className="my-4 bg-slate-300" />
        <SheetFooter className="mt-auto flex-row justify-between">
          {language.map(({ lng, active, code }, index) => {
            return (
              <Label
                key={index}
                className={cn(
                  "p-2 text-[11px] text-gray-500",
                  active ? "rounded-md font-extrabold" : "",
                )}
                onClick={() => handleLanguageChange(index, code)}
              >
                {lng}
              </Label>
            );
          })}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
