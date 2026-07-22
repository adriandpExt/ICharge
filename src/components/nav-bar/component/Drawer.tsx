import { LinkList } from "../type";

import { ReactElement, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Building2,
  Headset,
  Lightbulb,
  Menu,
  MessageCircleQuestion,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { Label } from "@/components/ui/label";
import { SvgIcons } from "@/components/svg-icons";

import LocalizationKey from "@/i18n/key";
import { cn } from "@/lib/utils";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { followUs } from "@/components/footer/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { IconName } from "@/components/svg-icons/utils";

export const Drawer = () => {
  const { t } = useTranslation();

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
      label: t(LocalizationKey.navigation.howTo),
      path: "/how-to",
      icon: MessageCircleQuestion,
    },
    {
      label: "Solutions",
      icon: Lightbulb,
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
      icon: Building2,
    },
    {
      label: "Contact Us",
      path: "/contact-us",
      icon: Headset,
    },
  ];

  const renderDrawerMenu = () => {
    return linkList.map((item) => {
      const renderIcon = () => {
        return (
          item.icon && (
            <item.icon
              className={cn(
                "mr-2 size-8",
                location.pathname === item.path
                  ? "text-white"
                  : "text-green-500",
              )}
            />
          )
        );
      };

      return item.subChild ? (
        <Accordion
          key={item.label}
          type="single"
          collapsible
          className="w-full"
        >
          <AccordionItem className="border-b-0" value="test">
            <AccordionTrigger className="p-2 font-poppins text-base hover:no-underline">
              {renderIcon()}
              {item.label}
            </AccordionTrigger>
            <AccordionContent className="p-0 pl-4">
              {item.subChild.map((sub) => (
                <NavLink
                  key={sub.label}
                  to={sub.path as string}
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    cn(
                      "inline-flex w-full justify-start px-4 py-2 font-poppins text-base",
                      isActive
                        ? "rounded-md bg-[#38D430] text-white"
                        : "bg-transparent text-black",
                    )
                  }
                >
                  {sub.label}
                </NavLink>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <NavLink
          key={item.label}
          to={item.path as string}
          onClick={closeDrawer}
          className={({ isActive }) =>
            cn(
              "inline-flex items-center justify-start p-2 font-poppins text-base",
              isActive
                ? "rounded-md bg-[#38D430] text-white"
                : "bg-transparent text-black",
            )
          }
        >
          {renderIcon()}

          {item.label}
        </NavLink>
      );
    });
  };

  const renderSvg = (): ReactElement[] => {
    return followUs.map((item) => (
      <Avatar key={item.path} onClick={() => window.open(item.path, "_blank")}>
        <AvatarFallback>
          <SvgIcons name={item.icon as IconName} size={35} color="#39d431" />
        </AvatarFallback>
      </Avatar>
    ));
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

      <SheetContent side="left" className="over flex flex-col bg-white p-4">
        <SheetHeader>
          <SheetTitle className="flex justify-center" onClick={handleBackHome}>
            <SvgIcons name="ic_svl_g2" size={150} />
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <div className="no-scrollbar space-y-4 overflow-y-auto">
          <div className="flex flex-col space-y-1">{renderDrawerMenu()}</div>
          <Separator className="bg-slate-300" />
          <Label className="font-bold">Socials</Label>
          <div className="flex items-center justify-evenly">{renderSvg()}</div>
        </div>
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
