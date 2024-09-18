import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Globe, Menu } from "lucide-react";

import { Button } from "../ui/button";

import { linkList } from "./utils";
import useStore from "@/store/useStore";
import useScroll from "@/hooks/useScroll";
import { SvgIcons } from "../svg-icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const Drawer = () => {
  const { scrollToSection } = useStore();
  const isScroll = useScroll(window.innerHeight);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          className={`inline-flex lg:hidden ${isScroll ? "text-black" : "text-white"}`}
        />
      </SheetTrigger>

      <SheetContent side={"left"} className="space-y-5 bg-white text-center">
        <SvgIcons name={"ic_svl_g2"} size={150} />

        <div className="flex flex-col space-y-2">
          {linkList.map(({ item, id }, index) => (
            <Button
              key={index}
              variant={"ghost"}
              className="font-semibold"
              onClick={() => scrollToSection(id)}
            >
              {item}
            </Button>
          ))}
          <Button variant="outline">Android</Button>
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
            <SelectContent>
              <SelectGroup className="text-center">
                <SelectItem value="chinese">Chinese</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
