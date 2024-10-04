import { useState, useCallback, useMemo } from "react"; // Added useCallback and useMemo
import { Link, useNavigate } from "react-router-dom";
import { Globe, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { SvgIcons } from "../../svg-icons";
import i18n from "@/i18n";
import { language, linkList } from "../utils";
import { Label } from "@/components/ui/label";
import { IconName } from "@/components/svg-icons/utils";
import { AccordionTrigger } from "./accordion";

export const Drawer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const handleValueChange = useCallback((value: string) => {
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
  }, []);

  const renderDrawerMenu = useMemo(() => {
    return linkList.map((item, index) =>
      item.subChild && item.subChild.length > 0 ? (
        <Accordion
          key={index}
          type="single"
          collapsible
          className="w-full rounded-lg hover:bg-[#38D430]"
        >
          <AccordionItem
            value={`item-${index}`}
            className="flex flex-col justify-between border-b-0"
          >
            <AccordionTrigger className="px-4 font-[600]">
              {item.icon && <item.icon className="mr-2 text-green-500" />}{" "}
              {item.label}
            </AccordionTrigger>
            <AccordionContent className="px-4 text-left text-white">
              <ul className="space-y-2">
                {item.subChild.map((child, childIndex) => (
                  <li key={childIndex}>
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
          className="flex items-center justify-start rounded-xl active:bg-[#38D430]"
          onClick={closeDrawer}
        >
          {item.icon && <item.icon className="mr-2 text-green-500" />}
          <Link to={item.path as string} className="font-poppins">
            <Label>{item.label}</Label>
          </Link>
        </Button>
      ),
    );
  }, [closeDrawer]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu
          className="inline-flex text-white lg:hidden"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white">
        <SheetHeader>
          <SheetTitle
            className="flex justify-center"
            onClick={() => {
              handleBackHome();
              closeDrawer();
            }}
          >
            <SvgIcons name="ic_svl_g2" size={150} />
          </SheetTitle>

          <div className="flex flex-col space-y-2">
            {renderDrawerMenu}

            <Select
              onValueChange={(value) => {
                handleValueChange(value);
                closeDrawer();
              }}
              value={selectedLanguage}
            >
              <SelectTrigger className="flex w-auto items-center justify-between space-x-5 whitespace-nowrap">
                <SelectValue
                  placeholder={
                    <div className="flex items-center gap-3">
                      <Globe className="text-green-500" />
                      <Label className="font-poppins">Language</Label>
                    </div>
                  }
                />
              </SelectTrigger>

              <SelectContent className="flex flex-col items-center">
                <SelectGroup>
                  {language.map((item) => (
                    <SelectItem
                      value={item.id}
                      key={item.id}
                      onClick={closeDrawer}
                    >
                      <div className="flex items-center">
                        <SvgIcons name={item.icons as IconName} size={30} />
                        <span className="ml-2">{item.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
