import { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
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
  AccordionTrigger,
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

import { linkList } from "../utils";
import { Label } from "@/components/ui/label";

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false); // State for drawer open/close

  const closeDrawer = () => {
    setIsOpen(false); // Close the drawer
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const renderDrawerMenu = () => {
    return linkList.map((item, index) =>
      item.subChild && item.subChild.length > 0 ? (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem value={`item-${index}`} className="border-b-0">
            <AccordionTrigger className="px-4 py-2 font-[600] hover:no-underline">
              {item.label}
            </AccordionTrigger>
            <AccordionContent className="px-4 text-left">
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
          className="justify-start"
          onClick={closeDrawer}
        >
          <Link to={item.path as string} className="font-poppins">
            {item.label}
          </Link>
        </Button>
      ),
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {" "}
      {/* Control open state */}
      <SheetTrigger>
        <Menu
          className={`inline-flex text-white lg:hidden`}
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="space-y-5 bg-white">
        <SheetHeader>
          <SheetTitle>
            <SvgIcons name={"ic_svl_g2"} size={150} />
          </SheetTitle>

          <div className="flex flex-col space-y-2">
            {renderDrawerMenu()}

            <Select>
              <SelectTrigger className="flex w-auto items-center justify-center space-x-2 whitespace-nowrap">
                <SelectValue
                  placeholder={
                    <div className="flex items-center justify-center gap-1">
                      <Globe /> Language
                    </div>
                  }
                />
              </SelectTrigger>

              <SelectContent className="flex flex-col items-center">
                <SelectGroup className="text-center">
                  <SelectItem
                    value="chinese"
                    className="text-center"
                    onClick={closeDrawer}
                  >
                    Chinese
                  </SelectItem>
                  <SelectItem
                    value="english"
                    className="text-center"
                    onClick={closeDrawer}
                  >
                    English
                  </SelectItem>
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
